import { SET_USER } from "../../actions/syncActions/myActions";

const default_state = {
    payload: "",
    extra_data: "Hello World!"
}

export const set_user = (state = default_state, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state, // Keep all state and olny modify counter
                payload: action.payload
            }
        }
        default: return state;
    }
}