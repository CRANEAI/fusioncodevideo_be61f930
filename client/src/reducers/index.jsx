import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import signup from "./reducer_signup"
import live from "./reducer_live"
import composite from "./reducer_composite"
import sign_in from "./reducer_sign_in"

const rootReducer = combineReducers({
  signup: signup,
  live: live,
  composite: composite,
  sign_in: sign_in
})

export default rootReducer
