import Axios from "axios"

export const COIN_REQUEST = 'COIN_REQUEST'
export const COIN_REQUEST_SUCCESS = 'COIN_REQUEST_SUCCESS'
export const COIN_REQUEST_ERROR = 'COIN_REQUEST_ERROR'

// Actions

export const coin_Request = () => {
    return {
        type: COIN_REQUEST
    }
}

export const coin_Request_Success = (result) => {
    return {
        type: COIN_REQUEST_SUCCESS,
        payload: result
    }
}

export const coin_Request_Error = (error) => {
    return {
        type: COIN_REQUEST_ERROR,
        payload: error
    }
}

const coin_action = (value) =>
{
    return (dispatch) => {
        dispatch(coin_Request());
        Axios.get(`https://1numasskl2.execute-api.us-east-1.amazonaws.com/CoinMarketCap-API`) //${value} if you want insert value into URL 
            .then(response =>{
                dispatch(coin_Request_Success(response.data));
            })
            .catch(error =>{
                dispatch(coin_Request_Error(error))
            })
    }
}

export default coin_action;