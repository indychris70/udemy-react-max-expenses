import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  let filterYear = props.filterYear;
  let setFilterYearHandler = props.setFilterYearHandler;

  return (
    <div className='expenses-filter'>
      <p>{filterYear}</p>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={filterYear} onChange={setFilterYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;