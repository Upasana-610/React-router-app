import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";
import { Fragment } from "react/cjs/react.production.min";

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
  let [appname, setAppname] = useState(appName);
  const handleChange = (e) => {
    e.preventDefault();
    setAppname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppName(appname);
  };

  const changeToFitness = () => {
    addApplication({
      fitness: true,
      budget: false,
    });

    addAppName("Fitness Tracker");
    setAppname("Fitness Tracker");
  };

  const changeToBudget = () => {
    addApplication({
      fitness: false,
      budget: true,
    });

    addAppName("Budget App");
    setAppname("Budget App");
  };
  return (
    <Fragment>
      <div className="profile">
        <form onSubmit={handleSubmit}>
          <label>Edit Application Name</label>
          <input type="text" onChange={handleChange} value={appname} />
        </form>
        <h2>Choose Your Application Type</h2>
        <ul>
          <li>
            Fitness Tracker{" "}
            <div className="icon" onClick={changeToFitness}>
              {application.fitness ? <ImRadioChecked2 /> : <ImRadioUnchecked />}
            </div>
          </li>
          <li>
            Budget App{" "}
            <div className="icon" onClick={changeToBudget}>
              {application.budget ? <ImRadioChecked2 /> : <ImRadioUnchecked />}
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Profile;
