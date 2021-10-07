import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// This is a Single State approach.
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = event => {
		// This (Multiple State) approach is used most frequently according to Max
		setEnteredTitle(event.target.value);

		// This approach is okay, but could cause issues if there are a lot of updates
		// setUserInput({
		// 	...prevState,
		// 	enteredTitle: event.target.value,
		// });

		// This approach guarantees that React uses the previous State no matter what
		// setUserInput(prevState => {
		// 	return {
		// 		...prevState,
		// 		enteredTitle: event.target.value,
		// 	};
		// });
	};

	const amountChangeHandler = event => {
		// This (Multiple State) approach is used most frequently according to Max
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = event => {
		// This (Multiple State) approach is used most frequently according to Max
		setEnteredDate(event.target.value);
	};

	const submitHandler = event => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredAmount('');
		setEnteredTitle('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
