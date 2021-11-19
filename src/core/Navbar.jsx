import React, { useContext, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

import { useHistory } from "react-router-dom";

import { GlobalContext } from "../context/ExpenseContext";
import { FcSettings } from "react-icons/fc";
import { LayoutContext } from "../context/LayoutContext";
import { AiOutlineBorderInner } from "react-icons/ai";
const Navbar = () => {
  let { appName, addDate } = useContext(GlobalContext);

  let { layout, changeLayout, color } = useContext(LayoutContext);
  let history = useHistory();
  let t = true;
  let f = false;
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const clickSettings = () => {
    history.push("/settings");
  };

  const clickHome = () => {
    addDate("");
    history.push("/");
  };

  const changeBody = () => {};

  return (
    <div
      className={`navbar  ${
        layout === "2"
          ? "navbargreen"
          : layout === "3"
          ? "navbarpurple"
          : layout === "0"
          ? "navbardark"
          : ""
      }`}
    >
      <div className={` navbar-wrapper container `}>
        <h1
          className={`${layout === "0" ? "darkwriting1" : ""}`}
          onClick={clickHome}
        >
          {appName}
        </h1>
        <div className="rightnav">
          <div
            className="Theme"
            onClick={() => {
              console.log(color);
              isDarkMode ? changeLayout(color) : changeLayout("0");
              changeBody();
            }}
          >
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={80}
            />
          </div>

          <FcSettings style={{ color: "#9c1717" }} onClick={clickSettings} />
        </div>
      </div>
      <div style={{ visibility: "hidden" }}>
        {layout === "2"
          ? (document.body.className = "bodyGreen")
          : layout === "3"
          ? (document.body.className = "bodyPurple")
          : layout === "0"
          ? (document.body.className = "bodyDark")
          : (document.body.className = "")}
      </div>
    </div>
  );
};

export default Navbar;
//
