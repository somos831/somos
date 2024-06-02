import {
    REDU_LOAD_CATEGORY_EVENTS,
    REDU_LOAD_EVENTS
} from "../reducertypes/eventReducerTypes.js"

const initialState = {
    categories: [],
    events: [],
}

// eslint-disable-next-line react-refresh/only-export-components
export default function(state = initialState, action) {
    const { type } = action

    switch(type) {
        case REDU_LOAD_EVENTS:
            return {
                ...state,
                events: action.payload
            }

        case REDU_LOAD_CATEGORY_EVENTS:
            return {
                ...state,
                categories: action.payload
            }

        default:
            return state
    }
}