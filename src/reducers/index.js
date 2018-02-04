
import { combineReducers } from "redux";
import { items } from "./items";
import { addReviewReducer } from "../components/AddReview/reducers";

export default combineReducers({
    items,
    addReviewReducer
});