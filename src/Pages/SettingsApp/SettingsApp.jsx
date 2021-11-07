import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

const SettingsApp = () => {
  let history = useHistory();

  const clickProfile = () => {
    history.push("/profile");
  };

  const clickLayout = () => {
    history.push("/layout");
  };
  return (
    <form className="Settingsform">
      <h2>Click to Edit</h2>
      <button onClick={clickProfile}>Profile</button>
      <button onClick={clickLayout}>Layout</button>
    </form>
  );
};

export default SettingsApp;
