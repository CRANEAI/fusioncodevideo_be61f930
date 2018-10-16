import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import live from "./reducer_live"
import sign_in from "./reducer_sign_in"
import signup from "./reducer_signup"
import signup from "./reducer_signup"

const rootReducer = combineReducers({
  live: live,
  sign_in: sign_in,
  signup: signup,
  signup: signup
})

export default rootReducer
