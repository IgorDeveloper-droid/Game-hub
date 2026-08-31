#!/usr/bin/env python3
"""Sistema de gestão financeira pessoal com SQLite e interface de linha de comando."""

import argparse
import csv
import sqlite3
from datetime import date, datetime
from decimal import Decimal, InvalidOperation
from pathlib import Path


DEFAULT_DATABASE = Path(__file__).with_name("financeiro.db")


def parse_money(value: str) -> int:
    """Converte reais para centavos, evitando erros de ponto flutuante."""
    normalized = value.strip().replace("R$", "").replace(" ", "").replace(".", "").replace(",", ".")
    try:
        amount = Decimal(normalized).quantize(Decimal("0.01"))
    except InvalidOperation as error:
        raise argparse.ArgumentTypeError(f"valor inválido: {value}") from error
    if amount <= 0:
        raise argparse.ArgumentTypeError("o valor deve ser maior que zero")
    return int(amount * 100)


def format_money(cents: int) -> str:
    amount = Decimal(cents) / 100
    return f"R$ {amount:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")


def validate_date(value: str) -> str:
    try:
        datetime.strptime(value, "%Y-%m-%d")
    except ValueError as error:
        raise argparse.ArgumentTypeError("use a data no formato AAAA-MM-DD") from error
    return value


class FinanceManager:
    def __init__(self, database: str | Path = DEFAULT_DATABASE):
        self.database = str(database)
        self.connection = sqlite3.connect(self.database)
        self.connection.row_factory = sqlite3.Row
        self.connection.execute("PRAGMA foreign_keys = ON")
        self._create_schema()

    def _create_schema(self) -> None:
        self.connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS transactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                description TEXT NOT NULL,
                amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),
                transaction_type TEXT NOT NULL CHECK (transaction_type IN ('receita', 'despesa')),
                category TEXT NOT NULL,
                transaction_date TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_transactions_date
                ON transactions(transaction_date);
            CREATE INDEX IF NOT EXISTS idx_transactions_type
                ON transactions(transaction_type);
            """
        )
        self.connection.commit()

    def close(self) -> None:
        self.connection.close()

    def add(self, description: str, amount_cents: int, transaction_type: str,
            category: str, transaction_date: str) -> int:
        if transaction_type not in {"receita", "despesa"}:
            raise ValueError("tipo deve ser receita ou despesa")
        cursor = self.connection.execute(
            """INSERT INTO transactions
               (description, amount_cents, transaction_type, category, transaction_date)
               VALUES (?, ?, ?, ?, ?)""",
            (description.strip(), amount_cents, transaction_type, category.strip(), transaction_date),
        )
        self.connection.commit()
        return cursor.lastrowid

    def remove(self, transaction_id: int) -> bool:
        cursor = self.connection.execute("DELETE FROM transactions WHERE id = ?", (transaction_id,))
        self.connection.commit()
        return cursor.rowcount == 1

    def list_transactions(self, month: str | None = None, transaction_type: str | None = None,
                          category: str | None = None) -> list[sqlite3.Row]:
        clauses, parameters = [], []
        if month:
            clauses.append("transaction_date LIKE ?")
            parameters.append(f"{month}-%")
        if transaction_type:
            clauses.append("transaction_type = ?")
            parameters.append(transaction_type)
        if category:
            clauses.append("LOWER(category) = LOWER(?)")
            parameters.append(category)
        where = f"WHERE {' AND '.join(clauses)}" if clauses else ""
        return self.connection.execute(
            f"SELECT * FROM transactions {where} ORDER BY transaction_date DESC, id DESC", parameters
        ).fetchall()

    def summary(self, month: str | None = None) -> dict[str, int]:
        rows = self.list_transactions(month=month)
        income = sum(row["amount_cents"] for row in rows if row["transaction_type"] == "receita")
        expenses = sum(row["amount_cents"] for row in rows if row["transaction_type"] == "despesa")
        return {"receitas": income, "despesas": expenses, "saldo": income - expenses,
                "quantidade": len(rows)}

    def export_csv(self, destination: str | Path, month: str | None = None) -> int:
        rows = self.list_transactions(month=month)
        with Path(destination).open("w", newline="", encoding="utf-8") as file:
            writer = csv.writer(file)
            writer.writerow(["id", "descricao", "tipo", "categoria", "valor", "data"])
            for row in rows:
                writer.writerow([row["id"], row["description"], row["transaction_type"], row["category"],
                                 format_money(row["amount_cents"]), row["transaction_date"]])
        return len(rows)


def print_transactions(rows: list[sqlite3.Row]) -> None:
    if not rows:
        print("Nenhum lançamento encontrado.")
        return
    print(f"{'ID':<4} {'DATA':<10} {'TIPO':<9} {'CATEGORIA':<16} {'VALOR':>15}  DESCRIÇÃO")
    print("-" * 78)
    for row in rows:
        print(f"{row['id']:<4} {row['transaction_date']:<10} {row['transaction_type']:<9} "
              f"{row['category'][:16]:<16} {format_money(row['amount_cents']):>15}  {row['description']}")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Gestão financeira pessoal")
    parser.add_argument("--db", default=str(DEFAULT_DATABASE), help="caminho do banco SQLite")
    subparsers = parser.add_subparsers(dest="command", required=True)

    add_parser = subparsers.add_parser("adicionar", aliases=["add"], help="cadastra um lançamento")
    add_parser.add_argument("tipo", choices=["receita", "despesa"])
    add_parser.add_argument("descricao")
    add_parser.add_argument("valor", type=parse_money)
    add_parser.add_argument("-c", "--categoria", default="geral")
    add_parser.add_argument("-d", "--data", type=validate_date, default=date.today().isoformat())

    list_parser = subparsers.add_parser("listar", aliases=["list"], help="lista lançamentos")
    list_parser.add_argument("-m", "--mes", help="filtra por mês, por exemplo 2026-08")
    list_parser.add_argument("-t", "--tipo", choices=["receita", "despesa"])
    list_parser.add_argument("-c", "--categoria")

    summary_parser = subparsers.add_parser("resumo", aliases=["summary"], help="exibe o resumo")
    summary_parser.add_argument("-m", "--mes", help="resume um mês, por exemplo 2026-08")

    remove_parser = subparsers.add_parser("remover", aliases=["remove"], help="remove um lançamento")
    remove_parser.add_argument("id", type=int)

    export_parser = subparsers.add_parser("exportar", aliases=["export"], help="exporta lançamentos para CSV")
    export_parser.add_argument("arquivo")
    export_parser.add_argument("-m", "--mes")
    return parser


def main() -> None:
    args = build_parser().parse_args()
    manager = FinanceManager(args.db)
    try:
        if args.command in {"adicionar", "add"}:
            transaction_id = manager.add(args.descricao, args.valor, args.tipo, args.categoria, args.data)
            print(f"Lançamento #{transaction_id} cadastrado com sucesso.")
        elif args.command in {"listar", "list"}:
            print_transactions(manager.list_transactions(args.mes, args.tipo, args.categoria))
        elif args.command in {"resumo", "summary"}:
            result = manager.summary(args.mes)
            scope = f" de {args.mes}" if args.mes else " geral"
            print(f"Resumo{scope}: {result['quantidade']} lançamentos")
            print(f"Receitas: {format_money(result['receitas'])}")
            print(f"Despesas: {format_money(result['despesas'])}")
            print(f"Saldo:    {format_money(result['saldo'])}")
        elif args.command in {"remover", "remove"}:
            print("Lançamento removido." if manager.remove(args.id) else "Lançamento não encontrado.")
        elif args.command in {"exportar", "export"}:
            total = manager.export_csv(args.arquivo, args.mes)
            print(f"{total} lançamentos exportados para {args.arquivo}.")
    finally:
        manager.close()


if __name__ == "__main__":
    main()