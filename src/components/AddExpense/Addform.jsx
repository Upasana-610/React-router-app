import React, { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isValidElement } from "react";
import { LayoutContext } from "../../context/LayoutContext";

const Addform = () => {
  const history = useHistory();
  let { layout } = useContext(LayoutContext);
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
    amount: "",
    date: "",
    note: "",
    id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid(e)) {
      //clearInputs
      clearInputs();
      save();
      //redirect to homepage
      setTimeout(() => {
        history.push("/");
      }, 3000);
      if (application.budget === true) {
        addExpense({ ...formData, id: uuidv4() });
      } else {
        addFitness(formData);
      }
    }
  };

  const isValid = (e) => {
    let isValid = true;
    if (formData.amount !== undefined) {
      if (formData.amount <= 0) {
        isValid = false;
      }
    } else {
      isValid = false;
    }

    if (!isValid) {
      notify(
        `Please enter valid ${application.budget ? "Amount" : "Distance"}`
      );
      isValid = false;
    }
    return isValid;
  };

  function notify(str) {
    toast.error(str, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function save() {
    toast.success("Saved Successfully", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const clearInputs = () => {
    setFormData({
      description: "",
      amount: "",
      date: "",
      note: "",
      id: "",
    });
  };

  return (
    <Fragment>
      <div className={`formdiv ${layout === "0" ? "formdivDark" : ""}`}>
        <form
          className={` ${layout === "0" ? "expense-itemdark" : ""}`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="description"
            name="description"
            required
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="number"
            placeholder={`${application.budget ? "Amount" : "Distance"}`}
            name="amount"
            required
            onChange={handleChange}
            value={formData.amount}
          />
          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            value={formData.date}
          />
          <textarea
            name="note"
            cols="30"
            rows="10"
            placeholder={`Add a note for your ${
              application.budget ? "Expenses." : "Distance covered."
            } (optional)`}
            onChange={handleChange}
            value={formData.note}
          ></textarea>
          {/* <button>Submit Form</button> */}
          <input
            className="Submitform"
            type="submit"
            value="Submit Form"
            style={{
              backgroundColor: "   #090944",
              cursor: "pointer",
              color: "#fafafd",
              border: "none",
            }}
          />
        </form>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Addform;
