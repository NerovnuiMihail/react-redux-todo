import {combineReducers} from "redux";
import {todoReducer} from "./TodoReducer";
import { modalReducer } from "./ModalReducer";
import {homeReducer} from "./HomeReducer";

export const rootReducer = combineReducers({
    todoReducer,
    modalReducer,
    homeReducer,
})