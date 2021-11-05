import React, { Fragment } from "react";
import Addform from "../../components/AddExpense/Addform";
import { GlobalContext } from "../../context/ExpenseContext";

const AddExpense = () => {
  return (
    <Fragment>
      <Addform />
    </Fragment>
  );
};

export default AddExpense;
