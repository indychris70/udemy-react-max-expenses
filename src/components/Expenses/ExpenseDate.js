import './ExpenseDate.css';

const ExpenseDate = (props) => {
    let date = props.date;
    let year = date.getFullYear();
    let month = date.toLocaleString('en-US', { month: 'long' });
    let day = date.toLocaleString('en-US', { day: '2-digit' });

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate;