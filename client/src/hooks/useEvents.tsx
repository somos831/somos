import React from "react"

import { useSelector, useDispatch } from 'react-redux'

import { actionLoadCategoryEvents, actionLoadEvents } from '../actions/eventActions'

import axiosClient from '../utils/axiosClient'

const useEvents = () => {
    const dispatch = useDispatch()

    const { categories, events } = useSelector(state => state.events)

    const loadCategories = () => {
        axiosClient.get('/categories').then( function ({ data }) {
            dispatch(actionLoadCategoryEvents(data))
        })
    }

    const loadEvents = () => {
        axiosClient.get('/events').then( function ({ data }) {
            dispatch(actionLoadEvents(data))
        })
    }

    const loadInformation = () => {
        loadCategories()
        loadEvents()
    }


    const upcomingevents = React.useMemo(() => events, [events])
    const pastevents = React.useMemo(() => events, [events])

    return {
        categories,
        events,
        upcomingevents,
        pastevents,
        loadCategories,
        loadInformation,
        loadEvents,
    }
}

export default useEvents