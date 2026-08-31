import csv
import tempfile
import unittest
from pathlib import Path

from financeiro import FinanceManager, format_money, parse_money


class FinanceManagerTest(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.manager = FinanceManager(Path(self.temp_dir.name) / "test.db")

    def tearDown(self):
        self.manager.close()
        self.temp_dir.cleanup()

    def test_parse_money_and_format(self):
        self.assertEqual(parse_money("1.234,56"), 123456)
        self.assertEqual(format_money(123456), "R$ 1.234,56")

    def test_summary_and_filters(self):
        self.manager.add("Salário", 500000, "receita", "trabalho", "2026-08-05")
        self.manager.add("Aluguel", 180000, "despesa", "moradia", "2026-08-06")
        self.manager.add("Mercado", 70000, "despesa", "alimentação", "2026-07-06")
        summary = self.manager.summary("2026-08")
        self.assertEqual(summary, {"receitas": 500000, "despesas": 180000, "saldo": 320000, "quantidade": 2})
        self.assertEqual(len(self.manager.list_transactions(category="moradia")), 1)

    def test_remove_and_export(self):
        transaction_id = self.manager.add("Freela", 12500, "receita", "extra", "2026-08-20")
        self.assertTrue(self.manager.remove(transaction_id))
        self.assertFalse(self.manager.remove(transaction_id))
        self.manager.add("Conta", 9900, "despesa", "casa", "2026-08-20")
        destination = Path(self.temp_dir.name) / "export.csv"
        self.assertEqual(self.manager.export_csv(destination), 1)
        with destination.open(encoding="utf-8") as file:
            rows = list(csv.reader(file))
        self.assertEqual(rows[0], ["id", "descricao", "tipo", "categoria", "valor", "data"])
        self.assertEqual(rows[1][4], "R$ 99,00")


if __name__ == "__main__":
    unittest.main()