import React, { Fragment } from "react";

const ExpenseDetails = () => {
  return (
    <Fragment>
      <div className="expensedetails">
        <div className="container expense-content">
          <h1>Viewing 0 expenses totalling $0.00</h1>
          <button className="add-expense-btn">Add Expense</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
