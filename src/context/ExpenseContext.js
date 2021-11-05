import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

// import { GlobalContext } from "../../context/ExpenseContext/ExpenseContext";

const initialState = {
  expenses: [],
  theme: true,
};

// Created Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  //   actions
  const addExpense = (newExpense) => {
    dispatch({
      type: "ADD_EXPENSE", //mandatory
      payload: newExpense,
    });
  };

  const addTheme = (newtheme) => {
    dispatch({
      type: "ADD_THEME",
      payload: newtheme,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        addExpense: addExpense,
        theme: state.theme,
        addTheme: addTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
