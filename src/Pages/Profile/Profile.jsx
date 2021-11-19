import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";
import { Fragment } from "react/cjs/react.production.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LayoutContext } from "../../context/LayoutContext";

const Profile = () => {
  let {
    addAppName,
    appName,
    application,
    addApplication,

    expenses,
    fitness,
    clearView,
  } = useContext(GlobalContext);
  let { layout } = useContext(LayoutContext);
  let [appname, setAppname] = useState(appName);
  let [bud, setBud] = useState(false);
  let [fit, setfit] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setAppname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save();
    setTimeout(() => {
      addAppName(appname);
      addApplication({
        fitness: fit,
        budget: bud,
      });
    }, 3000);
  };

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

  const changeToFitness = () => {
    setfit(true);
    setBud(false);

    // addAppName("Fitness Tracker");
    setAppname("Fitness Tracker");
  };

  const changeToBudget = () => {
    setfit(false);
    setBud(true);

    // addAppName("Budget App");
    setAppname("Budget App");
  };
  return (
    <Fragment>
      <div className={`profile ${layout === "0" ? "profileDark" : ""}`}>
        <form
          className={` ${layout === "0" ? "expense-itemdark" : ""}`}
          className={` ${layout === "0" ? "profileformDark" : ""}`}
          onSubmit={handleSubmit}
        >
          <label className={`${layout === "0" ? "darkwriting3" : ""}`}>
            Edit Application Name
          </label>
          <input type="text" onChange={handleChange} value={appname} />

          <h2 className={`${layout === "0" ? "darkwriting3" : ""}`}>
            Choose Your Application Type
          </h2>
          <ul>
            <li className={`${layout === "0" ? "darkwriting3" : ""}`}>
              Fitness Tracker{" "}
              <div className="icon" onClick={changeToFitness}>
                {fit ? <ImRadioChecked2 /> : <ImRadioUnchecked />}
              </div>
            </li>
            <li className={`${layout === "0" ? "darkwriting3" : ""}`}>
              Budget App{" "}
              <div className="icon" onClick={changeToBudget}>
                {bud ? <ImRadioChecked2 /> : <ImRadioUnchecked />}
              </div>
            </li>
          </ul>
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

export default Profile;
