import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
    const filteredExpenses = props.filteredExpenses;
    const filterYear = props.filterYear;

    let expenseItemComponents = filteredExpenses.map(expense => {
        return <ExpenseItem key={expense.id} expenseItem={expense} />
    });

    const expenseListContent = expenseItemComponents.length > 0 ? expenseItemComponents : <h2 className="expenses-list__fallback">Nothing for {filterYear}</h2>

    return (
        <ul className="expenses-list">
            {expenseListContent}
        </ul>
    )
}

export default ExpensesList;