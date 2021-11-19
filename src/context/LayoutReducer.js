export default (state, action) => {
  switch (action.type) {
    case "LAYOUT":
      return {
        ...state,
        layout: action.payload,
      };
    case "COLOR":
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};
