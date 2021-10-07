import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 8, 23),
	},
	{
		id: 'e2',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 8, 23),
	},
	{
		id: 'e3',
		title: 'Mortgage',
		amount: 1286.78,
		date: new Date(2021, 8, 23),
	},
	{
		id: 'e4',
		title: 'Car Payment',
		amount: 325.0,
		date: new Date(2021, 8, 23),
	},
	{
		id: 'e5',
		title: 'Spotify',
		amount: 12.99,
		date: new Date(2021, 8, 23),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
