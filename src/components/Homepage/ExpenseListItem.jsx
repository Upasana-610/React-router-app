import { computeHeadingLevel } from "@testing-library/dom";
import React, { useContext } from "react";

import { Fragment, useState } from "react/cjs/react.production.min";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseListItem = () => {
  let { theme, expenses, filter, filterDate, fitness, application } =
    useContext(GlobalContext);
  console.log(filterDate);

  return (
    <Fragment>
      {(application.budget ? expenses : fitness).length != 0 ? (
        (application.budget ? expenses : fitness).map((item) => {
          if (filter.trim().length !== 0 && filterDate.trim().length != 0) {
            if (
              item.description.trim().substring(0, filter.length) === filter &&
              item.date.trim().substring(0, filterDate.trim().length) ===
                filterDate.trim()
            ) {
              return (
                <li
                  className={`expense-item ${theme ? "" : "expense-item-dark"}`}
                >
                  <span>
                    <h5>{item.description}</h5>
                    <h6>{item.date}</h6>
                    <p>{item.note}</p>
                  </span>

                  <strong>${item.amount}</strong>
                </li>
              );
            }
          } else if (filter.trim().length !== 0) {
            if (
              item.description.trim().substring(0, filter.length) === filter
            ) {
              return (
                <li
                  className={`expense-item ${theme ? "" : "expense-item-dark"}`}
                >
                  <span>
                    <h5>{item.description}</h5>
                    <h6>{item.date}</h6>
                    <p>{item.note}</p>
                  </span>

                  <strong>${item.amount}</strong>
                </li>
              );
            }
          } else if (filterDate.trim().length != 0) {
            if (
              item.date.trim().substring(0, filterDate.trim().length) ===
              filterDate.trim()
            ) {
              return (
                <li
                  className={`expense-item ${theme ? "" : "expense-item-dark"}`}
                >
                  <span>
                    <h5>{item.description}</h5>
                    <h6>{item.date}</h6>

                    <p>{item.note}</p>
                  </span>

                  <strong>${item.amount}</strong>
                </li>
              );
            }
          } else {
            return (
              <li
                className={`expense-item ${theme ? "" : "expense-item-dark"}`}
              >
                {console.log(item.date)}
                <span>
                  <h5>{item.description}</h5>
                  <h6>{item.date}</h6>
                  <p>{item.note}</p>
                </span>

                <strong>
                  {application.budget
                    ? `₹ ${item.amount}`
                    : `${item.amount} km`}
                </strong>
              </li>
            );
          }
        })
      ) : (
        <li>Sorry Empty List !</li>
      )}
    </Fragment>
  );
};

export default ExpenseListItem;
