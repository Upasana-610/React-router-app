import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  let { expenses, theme } = useContext(GlobalContext);
  console.log(expenses);
  return (
    <Fragment>
      <div className={`container ${theme ? "" : "expense-itemList-dark"} `}>
        <ul className="ExpenseItemList ">
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
