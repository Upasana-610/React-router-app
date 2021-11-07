export default (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "ADD_FITNESS":
      return {
        ...state,
        fitness: [...state.fitness, action.payload],
      };
    case "ADD_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "ADD_DATE":
      return {
        ...state,
        filterDate: action.payload,
      };
    case "ADD_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "ADD_NAME":
      return {
        ...state,
        appName: action.payload,
      };

    case "ADD_VIEW":
      return {
        ...state,
        view: [...state.view, action.payload],
      };

    case "CLEAR_VIEW":
      return {
        ...state,
        view: [action.payload],
      };

    case "ADD_APP":
      return {
        ...state,
        application: action.payload,
      };

    default:
      return state;
  }
};
