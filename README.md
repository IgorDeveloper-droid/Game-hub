# Game-hub

## Projeto de portfólio: Cívica Ops

O arquivo `civica.html` apresenta uma plataforma de operação urbana com dashboard responsivo, indicadores de atendimento, gráfico de volume, fila prioritária, tabela filtrável, modal de detalhes e menu adaptado para mobile.

Para demonstrar localmente:

```bash
python3 -m http.server 4173
```

Depois, abra `http://127.0.0.1:4173/civica.html` no navegador.

## Gestão financeira em Python

O arquivo `financeiro.py` oferece um sistema local de controle financeiro usando SQLite. Os valores são armazenados em centavos para manter precisão monetária.

### Começar

```bash
python3 financeiro.py resumo
```

O banco `financeiro.db` é criado automaticamente na primeira execução. Para usar outro banco, passe `--db caminho/arquivo.db`.

### Comandos

```bash
# Cadastrar receita ou despesa
python3 financeiro.py adicionar receita "Salário" 5000,00 -c trabalho
python3 financeiro.py adicionar despesa "Aluguel" 1800,00 -c moradia -d 2026-08-06

# Consultar lançamentos
python3 financeiro.py listar
python3 financeiro.py listar --mes 2026-08 --tipo despesa

# Consultar saldo e totais
python3 financeiro.py resumo --mes 2026-08

# Remover um lançamento pelo ID
python3 financeiro.py remover 2

# Exportar para planilha/CSV
python3 financeiro.py exportar lancamentos.csv --mes 2026-08
```

Também existem aliases em inglês: `add`, `list`, `summary`, `remove` e `export`.

### Testes

```bash
python3 -m unittest -v test_financeiro.py
```