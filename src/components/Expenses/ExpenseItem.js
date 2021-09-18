import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseItem.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseItem.title}</h2>
                <div className="expense-item__price">${props.expenseItem.amount}</div>
            </div>
        </Card>
    )
}


export default ExpenseItem;
