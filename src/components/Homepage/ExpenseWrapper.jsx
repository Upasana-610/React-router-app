import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseItemList from "./ExpenseItemList";

const ExpenseWrapper = () => {
  let { theme } = useContext(GlobalContext);
  return (
    <div className="ExpenseWrapper">
      <div className={`container expense-wrapper-heading `}>
        <h3>Expense</h3>
        <h3>Amount</h3>
      </div>

      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;
