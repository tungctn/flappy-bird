import React from 'react'
import { initState } from './AppContext'

export const Reducer = (state, action) => {
    switch (action.type) {
        case "START":
            return {
                ...state,
                left: state.left.map((left) => {
                    return left - 10
                })
            }
        case "SPACE":

            return {
                ...state,
                isPlaying: true,
                y: state.y - 8,
                isUpWard: true
            }
        case "NOT_SPACE":

            return {
                ...state,
                isPlaying: true,
                y: state.y + 6,
                isUpWard: false
            }
        case "GENERATE":
            const height = Math.floor(Math.random() * 200) - 100
            return {
                ...state,
                pipes: [...state.pipes, height],
                left: [...state.left, state.left[0] + state.left.length * 430]
            }
        case "GAME_OVER":
            return {
                ...state,
                score: action.payload.score
            }

    }
}

export default Reducer
