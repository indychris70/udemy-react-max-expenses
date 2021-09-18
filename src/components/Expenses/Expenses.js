import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const expenses = props.expenses;

    const [filterYear, setFilterYear] = useState('2022');

    const setFilterYearHandler = (event) => {
        setFilterYear(event.target.value);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filterYear={filterYear} setFilterYearHandler={setFilterYearHandler} />
                <ExpenseItem expenseItem={expenses[0]} />
                <ExpenseItem expenseItem={expenses[1]} />
                <ExpenseItem expenseItem={expenses[2]} />
                <ExpenseItem expenseItem={expenses[3]} />
            </Card>
        </div>
        
    )
}

export default Expenses;