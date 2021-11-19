import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

// import { GlobalContext } from "../../context/ExpenseContext/ExpenseContext";

const initialState = {
  expenses: [],
  fitness: [],

  filter: "",
  filterItem: "",
  filterDate: "",
  view: [{ description: "Sorry Empty List" }],
  appName: "Budget App",
  application: { fitness: false, budget: true },
};

// Created Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  // actions;
  const addExpense = (newExpense) => {
    dispatch({
      type: "ADD_EXPENSE", //mandatory
      payload: newExpense,
    });
  };

  const addFitness = (newFitness) => {
    dispatch({
      type: "ADD_FITNESS", //mandatory
      payload: newFitness,
    });
  };

  const addFilter = (newFilter) => {
    dispatch({
      type: "ADD_FILTER", //mandatory
      payload: newFilter,
    });
  };

  const addDate = (newDate) => {
    dispatch({
      type: "ADD_DATE", //mandatory
      payload: newDate,
    });
  };

  const addAppName = (newName) => {
    dispatch({
      type: "ADD_NAME",
      payload: newName,
    });
  };

  const addApplication = (newApp) => {
    dispatch({
      type: "ADD_APP",
      payload: newApp,
    });
  };

  const filterData = (id) => {
    dispatch({
      type: "FILTER_ITEM",
      payload: id,
    });
  };

  const editData = (data) => {
    dispatch({
      type: "EDIT_ITEM",
      payload: { data },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        addExpense: addExpense,

        filter: state.filter,
        addFilter: addFilter,
        filterDate: state.filterDate,
        addDate: addDate,
        appName: state.appName,
        addAppName: addAppName,
        view: state.view,

        application: state.application,
        addApplication: addApplication,
        fitness: state.fitness,
        addFitness: addFitness,
        filterItem: state.filterItem,
        filterData: filterData,
        editData: editData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
