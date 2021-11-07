import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";

import ExpenseItemList from "./ExpenseItemList";

const ExpenseWrapper = () => {
  let { application } = useContext(GlobalContext);
  return (
    <div className="ExpenseWrapper">
      <div className={`container expense-wrapper-heading `}>
        <h3> {application.budget ? "Expense" : "Fitness"}</h3>
        <h3>{application.budget ? "Amount" : "Distance"}</h3>
      </div>

      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;
