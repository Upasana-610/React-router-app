export default (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "ADD_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
