import React, { Fragment } from "react";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
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
