import React, { Fragment, useContext } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseWrapper from "../../components/Homepage/ExpenseWrapper";
import { LayoutContext } from "../../context/LayoutContext";
const ExpenseDetails = () => {
  let { application } = useContext(GlobalContext);
  let history = useHistory();
  let { layout } = useContext(LayoutContext);
  const handleClick = () => {
    history.push("/addexpense");
  };
  return (
    <Fragment>
      <div
        className={` expensedetails ${
          layout === "0" ? "expensedetailsDark" : ""
        } `}
      >
        <div className="container expense-content">
          <h1 className={`${layout === "0" ? "darkwriting1" : ""}`}>
            {application.budget
              ? "Viewing 0 expenses totalling $0.00"
              : "These are your Fitness Records"}
          </h1>
          {/* <a href="/addexpense">AddExpense</a> */}
          {/* <Link to="/addexpense">Add Expense</Link> */}
          <button
            className={`  add-expense-btn ${
              layout === "2"
                ? "expense-contentbtnGreen"
                : layout === "3"
                ? "expense-contentbtnPurple"
                : layout === "0"
                ? "expense-contentbtnDark"
                : ""
            }`}
            onClick={handleClick}
          >
            <p className={`${layout === "0" ? "darkwriting1" : ""}`}>
              {application.budget ? "Add Expense" : "Add Fitness Records"}
            </p>
          </button>
        </div>
        <ExpenseWrapper />
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
