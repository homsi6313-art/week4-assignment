const chalk = require('chalk');
let transactions = [
  {
    id: 1,
    type: 'income',
    category: 'salary',
    amount: 3000,
    description: 'salary',
    date: '2026-02-01',
  },
  {
    id: 2,
    type: 'expense',
    category: 'housing',
    amount: 1200,
    description: 'Rent',
    date: '2026-02-02',
  },
  {
    id: 3,
    type: 'expense',
    category: 'food',
    amount: 300,
    description: 'Groceries',
    date: '2026-02-03',
  },
  {
    id: 4,
    type: 'income',
    category: 'side-income',
    amount: 500,
    description: 'Freelance',
    date: '2026-02-04',
  },
  {
    id: 5,
    type: 'expense',
    category: 'bills',
    amount: 150,
    description: 'Utilities',
    date: '2026-02-05',
  },
];
console.log(chalk.green('Transactions loaded successfully.'));
function getTotalExpenses() {
  let total = 0;

  for (const transaction of transactions) {
    if (transaction.type === 'expense') {
      total += transaction.amount;
    }
  }

  return total;
}
function getTotalIncome() {
  let total = 0;
  for (const transaction of transactions) {
    if (transaction.type === 'income') {
      total += transaction.amount;
    }
  }
  return total;
}
function getBalance() {
  return getTotalIncome() - getTotalExpenses();
}
function printAllTransactions() {
  console.log(chalk.bold('\n$ PERSONAL FINANCE TRACKER \n$'));
  console.log(chalk.bold('All Transactions:\n'));

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    const label = transaction.type === 'income' ? 'INCOME' : 'EXPENSE';

    const amountColor =
      transaction.type === 'income'
        ? chalk.green(`€${transaction.amount}`)
        : chalk.red(`€${transaction.amount}`);

    const categoryColor = chalk.yellow(`(${transaction.category})`);

    console.log(
      `${i + 1}. [${label}] ${transaction.description} - ${amountColor} ${categoryColor}`,
    );
  }
}
console.log('Total Income:', getTotalIncome());
console.log('Total Expenses:', getTotalExpenses());
console.log('Current Balance:', getBalance());
printAllTransactions();
printSummary();
function printSummary() {
  console.log(chalk.bold('\n FINANCIAL SUMMARY '));

  const totalIncome = getTotalIncome();
  const totalExpenses = getTotalExpenses();
  const balance = getBalance();

  console.log(chalk.bold('Total Income: '), chalk.green(`€${totalIncome}`));
  console.log(chalk.bold('Total Expenses: '), chalk.red(`€${totalExpenses}`));

  const balanceColor =
    balance >= 0 ? chalk.cyan(`€${balance}`) : chalk.red(`€${balance}`);

  console.log(chalk.bold('Current Balance: '), balanceColor);

  console.log(chalk.bold('Total Transactions: '), transactions.length);

  let largestExpense = null;

  for (const transaction of transactions) {
    if (transaction.type === 'expense') {
      if (
        largestExpense === null ||
        transaction.amount > largestExpense.amount
      ) {
        largestExpense = transaction;
      }
    }
  }

  if (largestExpense) {
    console.log(
      chalk.bold('Largest Expense: '),
      `${largestExpense.description} (${chalk.red(
        `€${largestExpense.amount}`,
      )})`,
    );
  }
}
