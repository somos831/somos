import { combineReducers } from "redux";

import eventsReducer from "./eventsReducer";

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({
    events: eventsReducer
})