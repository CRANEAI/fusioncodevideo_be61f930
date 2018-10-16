import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import search from "./reducer_search"
import back_action from "./reducer_back_action"
import signup from "./reducer_signup"
import signup from "./reducer_signup"
import live from "./reducer_live"

const rootReducer = combineReducers({
  search: search,
  back_action: back_action,
  signup: signup,
  signup: signup,
  live: live
})

export default rootReducer
