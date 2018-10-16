import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import composite from "./reducer_composite"
import signup from "./reducer_signup"
import signup from "./reducer_signup"
import live from "./reducer_live"

const rootReducer = combineReducers({
  composite: composite,
  signup: signup,
  signup: signup,
  live: live
})

export default rootReducer
