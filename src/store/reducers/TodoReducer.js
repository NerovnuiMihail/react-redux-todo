const initialState = {
    arrToDo: [],
    changeToDo: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case "CREATE_TODO":
            return {...state, arrToDo: [...state.arrToDo,action.payload]};

        case "DELETE_TODO":
            return {...state, arrToDo: [...state.arrToDo.filter(todo => todo.id !== action.payload)]};

        case "CHANGE_TODO":
            return {...state, changeToDo: [...state.changeToDo, ...state.arrToDo.filter(todo => todo.id === action.payload)]};

        case "CHANGE_TODO_DELETE":
            return {...state, changeToDo: [...state.changeToDo.filter(todo => todo.id !== action.payload)]};

        default:
            return state;
    }
}