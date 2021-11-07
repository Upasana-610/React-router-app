import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  let { theme } = useContext(GlobalContext);

  return (
    <Fragment>
      <div className={`container ${theme ? "" : "expense-itemList-dark"} `}>
        <ul className="ExpenseItemList ">
          <ExpenseListItem />
        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
