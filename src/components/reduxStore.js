
// import { createStoreHook } from "react-redux"

import rootReducer from "./reduces"
import {   legacy_createStore   } from "redux";


const store = legacy_createStore( rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;

