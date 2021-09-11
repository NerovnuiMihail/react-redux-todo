import {combineReducers} from "redux";
import {todoReducer} from "./TodoReducer";
import { modalReducer } from "./ModalReducer";

export const rootReducer = combineReducers({
    todoReducer,
    modalReducer,
})