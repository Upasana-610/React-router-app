import React, { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { useHistory } from "react-router-dom";

const Addform = () => {
  const history = useHistory();
  //Consumer
  let {
    addExpense,

    expenses,

    application,
    fitness,
    addFitness,
  } = useContext(GlobalContext);

  let [formData, setFormData] = useState({
    description: "",
    amount: 0,
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    //clearInputs
    clearInputs();

    //redirect to homepage
    history.push("/");
    if (application.budget === true) {
      addExpense(formData);
    } else {
      addFitness(formData);
    }

    // console.log(expenses);
    // console.log("00");

    // console.log(view);
    // console.log("00");
    // clearView({});
    // console.log("00");
    // console.log(view);
  };

  const clearInputs = () => {
    setFormData({
      description: "",
      amount: 0,
      date: "",
      note: "",
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          onChange={handleChange}
          value={formData.amount}
        />
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
        />
        <textarea
          name="note"
          cols="30"
          rows="10"
          placeholder="Add a note for your expensse (optional)"
          onChange={handleChange}
          value={formData.note}
        ></textarea>
        <input type="submit" value="Submit Form" />
      </form>
    </Fragment>
  );
};

export default Addform;
