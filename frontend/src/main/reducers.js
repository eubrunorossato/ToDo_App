import { combineReducers } from "redux";
import todoReducer from "../Components/todoReducer"

const rootReducer = combineReducers({
  todo: todoReducer
})

export default rootReducer;
