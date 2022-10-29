import React, { createContext, useReducer, useState } from 'react'
import { saveScore } from '../api/score'
import Reducer from './Reducer'

export const AppContext = createContext()

export const initState = {
    isPlaying: false,
    y: 350,
    left: [
        430
    ],
    isUpWard: false,
    pipes: [
        0
    ],
    score: 0
}

const AppContextProvider = (props) => {

    const [state, dispatch] = useReducer(Reducer, initState)

    const data = {
        state,
        dispatch,
    }

    return (
        <AppContext.Provider value={data}>
            {props.children}
        </AppContext.Provider>

    )
}

export default AppContextProvider
