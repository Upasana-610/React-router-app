import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  let { expenses } = useContext(GlobalContext);
  console.log(expenses);
  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
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
