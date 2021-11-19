import { computeHeadingLevel } from "@testing-library/dom";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { Fragment, useState } from "react/cjs/react.production.min";
import { GlobalContext } from "../../context/ExpenseContext";
import { LayoutContext } from "../../context/LayoutContext";

const ExpenseListItem = () => {
  let { expenses, filter, filterDate, fitness, application } =
    useContext(GlobalContext);
  let { layout } = useContext(LayoutContext);
  let history = useHistory();
  const handleEdit = (id) => {
    console.log(id);
    history.push(`/editList/${id}`);
  };

  return (
    <Fragment>
      {(application.budget ? expenses : fitness).length != 0 ? (
        (application.budget ? expenses : fitness).map((item, idx) => {
          if (filter.trim().length !== 0 && filterDate.trim().length != 0) {
            if (
              item.description.trim().substring(0, filter.length) === filter &&
              item.date.trim().substring(0, filterDate.trim().length) ===
                filterDate.trim()
            ) {
              return (
                <li
                  key={idx}
                  className={`expense-item ${
                    layout === "0" ? "expense-item-dark" : ""
                  } `}
                >
                  <span>
                    <h5 className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.description}
                    </h5>
                    <h6 className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.date}
                    </h6>
                    <p className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.note}
                    </p>
                  </span>

                  <strong className={`${layout === "0" ? "darkwriting2" : ""}`}>
                    {application.budget
                      ? `₹ ${item.amount}`
                      : `${item.amount} km`}
                    <i>
                      <AiFillDelete />
                    </i>
                  </strong>
                </li>
              );
            }
          } else if (filter.trim().length !== 0) {
            if (
              item.description.trim().substring(0, filter.length) === filter
            ) {
              return (
                <li
                  key={idx}
                  className={`expense-item ${
                    layout === "0" ? "expense-item-dark" : ""
                  }`}
                >
                  <span>
                    <h5 className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.description}
                    </h5>
                    <h6 className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.date}
                    </h6>
                    <p className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.note}
                    </p>
                  </span>

                  <strong className={`${layout === "0" ? "darkwriting2" : ""}`}>
                    {application.budget
                      ? `₹ ${item.amount}`
                      : `${item.amount} km`}
                    <i>
                      <AiFillDelete />
                    </i>
                  </strong>
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
                  key={idx}
                  className={`expense-item ${
                    layout === "0" ? "expense-item-dark" : ""
                  }`}
                >
                  <span>
                    <h5 className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.description}
                    </h5>
                    <h6 className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.date}
                    </h6>

                    <p className={`${layout === "0" ? "darkwriting2" : ""}`}>
                      {item.note}
                    </p>
                  </span>

                  <strong className={`${layout === "0" ? "darkwriting2" : ""}`}>
                    {application.budget
                      ? `₹ ${item.amount}`
                      : `${item.amount} km`}
                    <i>
                      <AiFillDelete />
                    </i>
                  </strong>
                </li>
              );
            }
          } else {
            return (
              <li
                key={idx}
                onClick={() => handleEdit(item.id)}
                className={` expense-item ${
                  layout === "0" ? "expense-itemdark" : ""
                }`}
              >
                <span>
                  <h5 className={`${layout === "0" ? "darkwriting2" : ""}`}>
                    {item.description}
                  </h5>
                  <h6 className={`${layout === "0" ? "darkwriting2" : ""}`}>
                    {item.date}
                  </h6>
                  <p className={`${layout === "0" ? "darkwriting2" : ""}`}>
                    {item.note}
                  </p>
                </span>

                <strong className={`${layout === "0" ? "darkwriting2" : ""}`}>
                  {application.budget
                    ? `₹ ${item.amount}`
                    : `${item.amount} km`}
                  <i>
                    <AiFillDelete />
                  </i>
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
