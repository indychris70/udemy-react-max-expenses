import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // s/b unique, but this is good enough for demo purposes
        }
    
        props.onAddExpense(expenseData);
        setShowForm(false);
    };

    const toggleForm = () => setShowForm(!showForm);

    const addNewExpenseButton = 
        <div className="new-expense__actions">
            <button onClick={toggleForm}>Add New Expense</button>
        </div>

    const newExpenseContent = showForm ? <ExpenseForm toggleForm={toggleForm} onSaveExpenseData={saveExpenseDataHandler} /> : addNewExpenseButton;

    return <div className="new-expense">
        {newExpenseContent}
    </div>
}

export default NewExpense;