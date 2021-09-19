import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const expenses = props.expenses;

    const [filterYear, setFilterYear] = useState(2022);

    const setFilterYearHandler = (event) => {
        setFilterYear(event.target.value);
    }

    let filteredExpenses = expenses.filter(expense => { 
        return expense.date.getFullYear().toString() === filterYear
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filterYear={filterYear} setFilterYearHandler={setFilterYearHandler} />
                <ExpensesList filterYear={filterYear} filteredExpenses={filteredExpenses} />
            </Card>
        </div> 
    )
}

export default Expenses;