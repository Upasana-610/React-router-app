import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseFilterForm from "../../components/Homepage/ExpenseFilterForm";

import ExpenseItemList from "./ExpenseItemList";

import { LayoutContext } from "../../context/LayoutContext";

const ExpenseWrapper = () => {
  let { layout } = useContext(LayoutContext);
  let { application } = useContext(GlobalContext);
  return (
    <div
      className={`ExpenseWrapper 
      ${
        layout === "2"
          ? "ExpenseWrapperGreen"
          : layout === "3"
          ? "ExpenseWrapperPurple"
          : layout === "0"
          ? "ExpenseWrapperDark"
          : ""
      }`}
    >
      <ExpenseFilterForm />
      <div className={`container expense-wrapper-heading `}>
        <h3 className={`${layout === "0" ? "darkwriting2" : ""}`}>
          {" "}
          {application.budget ? "Expense" : "Fitness"}
        </h3>
        <h3 className={`${layout === "0" ? "darkwriting2" : ""}`}>
          {application.budget ? "Amount" : "Distance"}
        </h3>
      </div>

      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;
