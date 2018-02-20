function initialState() {
  return {
    topic: "",
    description: ""
  };
}

export function addReviewReducer(state = initialState(), action) {
  switch (action.type) {
    case "SUBMIT_REVIEW":
      submitReview(state);
      return state;

    case "CHANGE_PROPERTY":
      state[action.propertyKey] = action.value;
      return state;

    case "GET_RWEVIEW_BY_ID":
      return {
        ...state,
        topic: "TESTS"
      }

    default:
      return state;
  }

  function submitReview(state) {
    const submitDataObject = {
      topic: state.title,
      autherReview: state.description,
      votes: 0
    };

    fetch("http://localhost:3002/api/review", {
      method: "POST",
      body: JSON.stringify(submitDataObject),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      window.location = 'home';
      return response.json();
    });
  }
}
