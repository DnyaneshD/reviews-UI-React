export function submitReviewsData(items) {
    return {
        type: 'SUBMIT_REVIEW',
        items
    };
}

export function changeProperty(propertyKey, value) {
    return {
        type: 'CHANGE_PROPERTY',
        propertyKey,
        value
    };
}


export function submitReview (url) {
    return (dispatch) => {
        fetch(url)
        .then((response)=>{ return response.json()})
        .then((items)=>{
            dispatch(submitReview(items))
        });
    }
}

