import React, { Fragment } from "react";
import ExpenseDetails from "../../components/Homepage/ExpenseDetails";
import ExpenseFilterForm from "../../components/Homepage/ExpenseFilterForm";
import ExpenseWrapper from "../../components/Homepage/ExpenseWrapper";
import Navbar from "../../components/Homepage/Navbar";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <ExpenseDetails />
      <ExpenseFilterForm />
      <ExpenseWrapper />
    </Fragment>
  );
};

export default HomePage;
