function initialState() {
    return {
      Id: "",
      comment: ""
    };
  }
  
  export function addCommentReducer(state = initialState(), action) {
    switch (action.type) {
      case "SUBMIT_COMMENT":
        submitComment(state, action);
        return state;
  
      case "CHANGE_PROPERTY_COMMENT":
        return changeProperty(state, action);
  
      default:
        return state;
    }
  
    function submitComment(state, action) {
      const submitCommentObject = {
        reviewId: action.reviewId,
        comment: state.comment
      };
      
      fetch("http://localhost:3002/api/addsocialreview", {
        method: "POST",
        body: JSON.stringify(submitCommentObject),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(response => {
        return response.json();
      });
    }
  
    function changeProperty(state, action){
      return {
          ...state,
          [action.propertyKey] : action.value
        };
    }
  }
  