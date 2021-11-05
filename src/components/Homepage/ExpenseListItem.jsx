import React, { useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseListItem = () => {
  let { theme } = useContext(GlobalContext);
  return (
    <li className={`expense-item ${theme ? "" : "expense-item-dark"}`}>
      <span>
        <h5>Iphone 13 pro max</h5>
        <h6>November 12th 2021</h6>
      </span>

      <strong>$2000.00</strong>
    </li>
  );
};

export default ExpenseListItem;
