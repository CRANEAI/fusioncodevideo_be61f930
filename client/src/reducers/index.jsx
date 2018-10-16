import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import search from "./reducer_search"
import signup from "./reducer_signup"
import notifications from "./reducer_notifications"
import history from "./reducer_history"
import edit_profile from "./reducer_edit_profile"
import back_action from "./reducer_back_action"
import signup from "./reducer_signup"
import live from "./reducer_live"

const rootReducer = combineReducers({
  search: search,
  signup: signup,
  notifications: notifications,
  history: history,
  edit_profile: edit_profile,
  back_action: back_action,
  signup: signup,
  live: live
})

export default rootReducer
