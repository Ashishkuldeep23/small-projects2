
import { combineReducers } from "redux"

import { numberReduer } from "./incDec"


const rootReducer = combineReducers({
    numberReduer: numberReduer,
})


export default rootReducer;