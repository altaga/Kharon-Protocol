import { COIN_REQUEST, COIN_REQUEST_SUCCESS, COIN_REQUEST_ERROR } from "../../actions/asyncActions/coinAction";

const default_state = {
    loading: false,
    result: {
        data: {
            "9258": {
                quote: {
                    USD: {
                        price: 210.51129883412162
                    }
                }
            },
            "5426": {
                quote: {
                    USD: {
                        price: 145.47
                    }
                }
            },
            "5665": {
                quote: {
                    USD: {
                        price: 18.76
                    }
                }
            }
        }
    },
    error: '',
    extra_data: "Hello World!"
}

const coin = (state = default_state, action) => {
    switch (action.type) {
        case COIN_REQUEST: {
            return {
                ...state, // Keep all state and olny modify counter
                loading: true
            }
        }
        case COIN_REQUEST_SUCCESS: {
            return {
                ...state, // Keep all state and olny modify counter
                loading: false,
                result: action.payload,
                error: ''
            }
        }
        case COIN_REQUEST_ERROR: {
            return {
                ...state, // Keep all state and olny modify counter
                loading: false,
                result: '',
                error: action.payload
            }
        }
        default: return state;
    }
}

export default coin;