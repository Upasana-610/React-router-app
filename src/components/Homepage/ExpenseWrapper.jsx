import React, { Fragment } from "react";
import ExpenseItemList from "./ExpenseItemList";

const ExpenseWrapper = () => {
  return (
    <div className="ExpenseWrapper">
      <div className="container expense-wrapper-heading">
        <h3>Expense</h3>
        <h3>Amount</h3>
      </div>

      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;
