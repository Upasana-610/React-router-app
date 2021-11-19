import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../../context/LayoutContext";

const SettingsApp = () => {
  let history = useHistory();
  let { layout } = useContext(LayoutContext);

  const clickProfile = () => {
    history.push("/profile");
  };

  const clickLayout = () => {
    history.push("/layout");
  };
  return (
    <div
      className={`Settingsform  ${
        layout === "2"
          ? "SettingsformGreen"
          : layout === "3"
          ? "SettingsformPurple"
          : layout === "0"
          ? "SettingsformDark"
          : ""
      }`}
    >
      <h2 className={`${layout === "0" ? "darkwriting3" : ""}`}>
        Click to Edit
      </h2>
      <button
        className={layout === "0" ? "SettingsformbuttonDark darkwriting3" : ""}
        onClick={clickProfile}
      >
        Profile
      </button>
      <button
        className={layout === "0" ? "SettingsformbuttonDark darkwriting3" : ""}
        onClick={clickLayout}
      >
        Layout
      </button>
    </div>
  );
};

export default SettingsApp;
// .navbar//
//body
// .navbar-wrapper h1
// .expense-content h1

// .expense-content .add-expense-btn p

// .expense-wrapper-heading h3

// .expense-item h5,
// h6,
// p,
// strong

// .Settingsform h2,
// button
//
