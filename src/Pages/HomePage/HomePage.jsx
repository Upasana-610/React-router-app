import React, { Fragment } from "react";
import ExpenseDetails from "../../components/Homepage/ExpenseDetails";
import ExpenseFilterForm from "../../components/Homepage/ExpenseFilterForm";
import ExpenseWrapper from "../../components/Homepage/ExpenseWrapper";

const HomePage = () => {
  return (
    <Fragment>
      <ExpenseDetails />
      <ExpenseFilterForm />
      <ExpenseWrapper />
    </Fragment>
  );
};

export default HomePage;
