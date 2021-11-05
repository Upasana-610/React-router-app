import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseFilterForm = () => {
  let { theme } = useContext(GlobalContext);
  return (
    <div className={`ExpenseFilterForm ${theme ? "" : "filterDark"}`}>
      <div className="container filter-content ">
        <input
          type="text"
          placeholder="Search Expenses"
          name="searchInput"
          autocomplete="off"
        />
        <select name="filterDropdown" className="filter-dropdown">
          <option value="1" selected>
            Date
          </option>
          <option value="2">Amount</option>
        </select>
        <h1>Date Picker</h1>
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
