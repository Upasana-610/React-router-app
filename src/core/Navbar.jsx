import React, { useContext } from "react";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { GlobalContext } from "../context/ExpenseContext";
const Navbar = () => {
  let { addTheme } = useContext(GlobalContext);
  let { theme } = useContext(GlobalContext);
  let t = true;
  let f = false;

  // setTheme(true);
  return (
    <div className={`navbar ${theme ? "" : "dark"} `}>
      <div className={` navbar-wrapper container `}>
        <h1>Budget App</h1>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//
