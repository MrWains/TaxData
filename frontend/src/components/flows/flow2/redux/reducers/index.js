import statReducer from "./stats";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    status: statReducer,
});

export default rootReducer;