import { combineReducers } from "redux"
import {set_user} from "./syncReducers/myReducer"
import search from "./asyncReducers/searchReducer";
import coin from "./asyncReducers/coinReducer";

const rootReducers = combineReducers({
    set_user,
    search,
    coin
})

export default rootReducers;