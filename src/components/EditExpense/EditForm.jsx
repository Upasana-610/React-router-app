import React, { Fragment, useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { useHistory, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LayoutContext } from "../../context/LayoutContext";

const EditForm = () => {
  let { filterData, filterItem, editData, expenses, application } =
    useContext(GlobalContext);
  let { layout } = useContext(LayoutContext);
  let [formData, setFormData] = useState({
    description: "",
    amount: "",
    date: "",
    note: "",
    id: "",
  });
  let history = useHistory();

  let params = useParams();

  useEffect(() => {
    filterData(params.id);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, ...filterItem });
  }, [filterItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      editData(formData);
      clearInputs();
      save();
      //redirect to homepage

      setTimeout(() => {
        history.push("/");
        console.log(expenses);
      }, 3000);
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
      amount: 0,
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

export default EditForm;
