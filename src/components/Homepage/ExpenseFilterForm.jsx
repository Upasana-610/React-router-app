import React, { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseFilterForm = () => {
  let { theme, expenses, addFilter, filter, application, filterDate, addDate } =
    useContext(GlobalContext);
  let [expenseFilter, setExpenseFilter] = useState("");

  const handleChange = (e) => {
    setExpenseFilter(e.target.value);

    addFilter(expenseFilter);
    if (e.target.value.length === 0) {
      addFilter("");
    }
  };

  const handleDate = (e) => {
    addDate(e.target.value);
  };

  // const addingexpenseFilter = () => {};

  return (
    <div className={`ExpenseFilterForm ${theme ? "" : "filterDark"}`}>
      <div className="container filter-content ">
        <input
          type="text"
          placeholder={
            application.budget ? "Search Expenses" : "Search Fitness Records"
          }
          name="searchInput"
          autocomplete="off"
          onChange={handleChange}
        />
        <select name="filterDropdown" className="filter-dropdown">
          <option value="1" selected>
            Date
          </option>
          <option value="2">Amount</option>
        </select>
        <input type="date" name="date" onChange={handleDate} />
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
