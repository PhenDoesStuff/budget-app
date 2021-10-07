import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(), // NOTE: This is not a perfect way to set up a random id but it works for now
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm
				onSaveExpenseData={saveExpenseDataHandler}
			/>
		</div>
	);
};

export default NewExpense;
