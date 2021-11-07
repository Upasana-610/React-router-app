import React, { useContext } from "react";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { GlobalContext } from "../context/ExpenseContext";
import { FiSettings, FiHome } from "react-icons/fi";
const Navbar = () => {
  let { addTheme, appName, addDate } = useContext(GlobalContext);
  let { theme } = useContext(GlobalContext);
  let history = useHistory();
  let t = true;
  let f = false;

  const clickSettings = () => {
    history.push("/settings");
  };

  const clickHome = () => {
    addDate("");
    history.push("/");
  };

  // setTheme(true);
  console.log(appName);
  return (
    <div className={`navbar ${theme ? "" : "dark"} `}>
      {theme
        ? document.body.classList.remove("darkBack")
        : document.body.classList.add("darkBack")}
      <div className={` navbar-wrapper container `}>
        <h1>{appName}</h1>
        <div className="rightnav">
          <span className="theme">
            <button
              onClick={() => {
                addTheme(t);
              }}
            >
              <FaSun className={` ${theme ? "on" : "off"} `} />
            </button>

            <button
              onClick={() => {
                addTheme(f);
              }}
            >
              <FaMoon className={` ${theme ? "off" : "on"} `} />
            </button>
          </span>
          <FiSettings classname="settings" onClick={clickSettings} />
          <FiHome onClick={clickHome} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//
