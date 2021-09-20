export const SET_USER = "SET_USER"

export const set_user_action = (pub_key) => {
    return {
        type: "SET_USER",
        payload: pub_key
    }
}