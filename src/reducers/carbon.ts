const carbonReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default carbonReducer;
