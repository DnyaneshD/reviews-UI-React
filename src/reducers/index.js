
import { combineReducers } from "redux";
import { items } from "./items";
import { addReviewReducer } from "../components/AddReview/reducers";
import { addCommentReducer } from "../components/Comment/reducers"

export default combineReducers({
    items,
    addReviewReducer,
    addCommentReducer
});