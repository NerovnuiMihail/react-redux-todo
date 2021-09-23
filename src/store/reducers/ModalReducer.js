const initialState = {
    visible: false,
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SHOW_MODAl":
            return {...state,visible: true};

        case "CLOSE_MODAL":
            return {...state,visible: false};

        default:
            return state;
    }
}