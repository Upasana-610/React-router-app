import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ExpenseDetails = () => {
  let history = useHistory();
  console.log(history);

  const handleClick = () => {
    history.push("/addexpense");
  };
  return (
    <Fragment>
      <div className="expensedetails">
        <div className="container expense-content">
          <h1>Viewing 0 expenses totalling $0.00</h1>
          {/* <a href="/addexpense">AddExpense</a> */}
          {/* <Link to="/addexpense">Add Expense</Link> */}
          <button className="add-expense-btn" onClick={handleClick}>
            Add Expense
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
