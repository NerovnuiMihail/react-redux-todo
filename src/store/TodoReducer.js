const initialState = {
    title: '',
    text: '',
    arrToDo: [],
    changeToDo: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case "CREATE_TITLE":
            return {...state, title: action.payload};

        case "CREATE_TEXT":
            return {...state, text: action.payload};

        case "CREATE_TODO":
            return {...state, arrToDo: [...state.arrToDo,action.payload]};

        case "DELETE_TODO":
            return {...state, arrToDo: [...state.arrToDo.filter(todo => todo.id !== action.payload)]};

        case "CHANGE_TODO":
            return {...state, changeToDo: [...state.changeToDo, ...state.arrToDo.filter(todo => todo.id === action.payload)]};

        case "CHANGE_TODO_DELETE":
            return {...state, changeToDo: [...state.changeToDo.filter(todo => todo.id !== action.payload)]};

        case "RESET":
            return {...state, title: '', text: ''};

        default:
            return state;
    }
}