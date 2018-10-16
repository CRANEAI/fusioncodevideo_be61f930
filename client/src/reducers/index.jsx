import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import composite from "./reducer_composite"

const rootReducer = combineReducers({
  composite: composite
})

export default rootReducer
