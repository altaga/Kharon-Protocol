import Axios from "axios"

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS'
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR'

// Actions

export const search_Request = () => {
    return {
        type: SEARCH_REQUEST
    }
}

export const search_Request_Success = (result) => {
    return {
        type: SEARCH_REQUEST_SUCCESS,
        payload: result
    }
}

export const search_Request_Error = (error) => {
    return {
        type: SEARCH_REQUEST_ERROR,
        payload: error
    }
}

const search_action = (value) =>
{
    return (dispatch) => {
        dispatch(search_Request());
        let config = {
            headers: {
                pub_key: value,
            }
          }
        Axios.get(`https://f4zlln365l.execute-api.us-east-1.amazonaws.com/check-devices-by-pubkey`,config) //${value} if you want insert value into URL 
            .then(response =>{
                dispatch(search_Request_Success(response.data));
            })
            .catch(error =>{
                dispatch(search_Request_Error(error))
            })
    }
}

export default search_action;