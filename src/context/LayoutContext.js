import React, { createContext, useReducer } from "react";
import LayoutReducer from "./LayoutReducer";

// import { GlobalContext } from "../../context/ExpenseContext/ExpenseContext";

const initialState = {
  layout: "1",
  color: "1",
};

// Created Context
export const LayoutContext = createContext(initialState);

export const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LayoutReducer, initialState);

  // actions;
  const changeLayout = (layout) => {
    dispatch({
      type: "LAYOUT",
      payload: layout,
    });
  };

  const changecolor = (layout) => {
    dispatch({
      type: "COLOR",
      payload: layout,
    });
  };

  return (
    <LayoutContext.Provider
      value={{
        layout: state.layout,
        changeLayout: changeLayout,
        color: state.color,
        changecolor: changecolor,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
