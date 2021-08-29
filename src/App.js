import Expenses from './components/Expenses/Expenses';

const App = () => {
	const expenses = [
		{
			id: 'e1',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 8, 23),
		},
		{
			id: 'e1',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 8, 23),
		},
		{
			id: 'e2',
			title: 'Mortgage',
			amount: 1286.78,
			date: new Date(2021, 8, 23),
		},
		{
			id: 'e3',
			title: 'Car Payment',
			amount: 325.0,
			date: new Date(2021, 8, 23),
		},
		{
			id: 'e4',
			title: 'Spotify',
			amount: 12.99,
			date: new Date(2021, 8, 23),
		},
	];

	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
