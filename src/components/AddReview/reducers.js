function initialState() {
  return {
    title: "",
    description: ""
  };
}

export function addReviewReducer(state = initialState(), action) {
  switch (action.type) {
    case "SUBMIT_REVIEW":
      return state;

    case "CHANGE_PROPERTY":
        state[action.propertyKey] = action.value; 
        return state;

    default:
      return state;
  }
}
