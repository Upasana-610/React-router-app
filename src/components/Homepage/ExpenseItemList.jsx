import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  return (
    <Fragment>
      <div className={`container `}>
        <ul className="ExpenseItemList ">
          <ExpenseListItem />
        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
