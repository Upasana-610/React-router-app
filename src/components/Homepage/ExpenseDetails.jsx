import React, { Fragment, useContext } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseDetails = () => {
  let { theme } = useContext(GlobalContext);
  let history = useHistory();
  console.log(history);

  const handleClick = () => {
    history.push("/addexpense");
  };
  return (
    <Fragment>
      <div className={`${theme ? "" : "expenseDark"} expensedetails `}>
        <div className="container expense-content">
          <h1>Viewing 0 expenses totalling $0.00</h1>
          {/* <a href="/addexpense">AddExpense</a> */}
          {/* <Link to="/addexpense">Add Expense</Link> */}
          <button
            className={` ${theme ? "" : "expenseBtn"} add-expense-btn`}
            onClick={handleClick}
          >
            Add Expense
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
