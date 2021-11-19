import React, { Fragment } from "react";
import { useContext } from "react/cjs/react.development";
import ExpenseDetails from "../../components/Homepage/ExpenseDetails";

const HomePage = () => {
  return (
    <Fragment>
      <ExpenseDetails />
    </Fragment>
  );
};

export default HomePage;
