import {
    REDU_LOAD_CATEGORY_EVENTS,
    REDU_LOAD_EVENTS
} from "../reducertypes/eventReducerTypes.js"

export function actionLoadCategoryEvents(categories) {
    return async (dispatch) => dispatch({
        type: REDU_LOAD_CATEGORY_EVENTS,
        payload: categories
    })
}

export function actionLoadEvents(events) {
    return async (dispatch) => dispatch({
        type: REDU_LOAD_EVENTS,
        payload: events
    })
}