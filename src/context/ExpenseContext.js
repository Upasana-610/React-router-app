import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

// import { GlobalContext } from "../../context/ExpenseContext/ExpenseContext";

const initialState = {
  expenses: [],
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

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        addExpense: addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
