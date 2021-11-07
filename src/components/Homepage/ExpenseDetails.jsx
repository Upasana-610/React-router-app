import React, { Fragment, useContext } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseDetails = () => {
  let { theme, application } = useContext(GlobalContext);
  let history = useHistory();

  const handleClick = () => {
    history.push("/addexpense");
  };
  return (
    <Fragment>
      <div className={`${theme ? "" : "expenseDark"} expensedetails `}>
        <div className="container expense-content">
          <h1>
            {application.budget
              ? "Viewing 0 expenses totalling $0.00"
              : "These are your Fitness Records"}
          </h1>
          {/* <a href="/addexpense">AddExpense</a> */}
          {/* <Link to="/addexpense">Add Expense</Link> */}
          <button
            className={` ${theme ? "" : "expenseBtn"} add-expense-btn`}
            onClick={handleClick}
          >
            {application.budget ? "Add Expense" : "Add Fitness Records"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
