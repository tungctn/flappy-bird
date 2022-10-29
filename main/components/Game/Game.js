import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { saveScore } from '../../api/score'
import { AppContext } from '../../context/AppContext'
import Background from '../Background/Background'
import Bird from '../Bird/Bird'
import Notification from '../Notification/Notification'
import Pipe from '../Pipe/Pipe'
import { Howl, Howler } from 'howler'
import useSound from 'use-sound'

const Game = () => {


    const { state, dispatch } = useContext(AppContext)
    const [isPlay, setIsPlay] = useState(false)
    const [isLose, setIsLose] = useState()
    const [point, setPoint] = useState(1)
    const [nameInput, setNameInput] = useState('')
    const router = useRouter()
    const SoundPlay = () => {
        const sound = new Howl({ src: '/bgmusic.mp3', loop: true, volume: 0.03 })
        sound.play()
    }

    const SoundOver = () => {
        const sound = new Howl({ src: '/space.mp3', volume: 0.1 })
        sound.play()
    }
    useEffect(() => {
        if (state.y >= 675 || state.y === 0) {
            setIsLose(true)
        }
    }, [state.y])

    useEffect(() => {
        SoundPlay()
    }, [])

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode === 32) {
                setIsPlay(true)
                dispatch({ type: 'SPACE' })

            }
        }
        if (isPlay === true) {
            setInterval(() => {
                if (isPlay) {
                    dispatch({ type: 'NOT_SPACE' })
                    dispatch({ type: 'START' })
                }
            }, 100)

            setInterval(() => {
                if (isPlay) {
                    dispatch({ type: 'GENERATE' })
                }

            }, 4300)
        }

        document.addEventListener('keypress', handleKeyPress)
    }, [isPlay])


    useEffect(() => {
        if (!isLose) {
            setPoint(state.pipes.length)

        }

    }, [state.pipes, isLose])

    useEffect(() => {
        if (isLose) {
            SoundOver()
        }
    }, [isLose])

    return (
        <div
            style={{
                position: 'relative',
                width: 600,
                overflow: 'hidden',
                height: 710
            }}
        >
            <Background
                style={{
                    position: 'absolute',
                    width: '600px'
                }} />
            <Bird
                style={{
                    left: 100,
                    position: 'absolute',
                    top: state.y, //675
                    transform: `rotate(${state.isUpWard === true ? -30 : 0}deg)`,
                    transition: 'transform 100ms',
                }}
            />
            {!isLose && state.pipes.map((pipe, index) => {
                const scope1 = state.pipes[index] + 300 //355
                const scope2 = scope1 + 60   //415
                if ((state.left[index] < 170 && state.left[index] > 0) && (state.y < scope1 || state.y > scope2)) { // 364 < 355 || 364 > 415
                    setIsLose(true)
                    setPoint((prev) => {
                        return prev - 1
                    })
                    saveScore({ username: nameInput, score: (point - 1).toString() })
                }

                return (
                    <div key={index} style={{ marginLeft: `${state.left[index]}px` }} >

                        <Pipe
                            width={100}
                            height={300 + pipe}
                            style={{
                                position: 'absolute',
                                transform: `rotate(180deg)`,
                                top: 0
                            }}
                        />
                        <Pipe
                            width={100}
                            height={300 - pipe}
                            style={{
                                display: 'block',
                                position: 'absolute',
                                bottom: 0
                            }}
                        />

                    </div>
                )
            })}
            {!isLose && <p style={{ position: 'absolute', top: 50, left: 300, fontSize: 50, color: 'white' }}>{point - 1}</p>}
            {isLose && <Notification
                style=
                {{
                    position: 'absolute',
                    width: 350,
                    height: 200,
                    border: '3px solid black',
                    top: 255,
                    left: 125,
                    backgroundColor: '#FAD6A5',
                    padding: '10px',
                    color: 'white',
                    fontSize: 40,
                    display: `${isLose ? 'block' : 'none'}`
                }}
                point={point}
                restart={isPlay}
                setRestart={setIsPlay}
                isPlay={isPlay}
            />}

            {!isPlay && <Notification
                style=
                {{
                    position: 'absolute',
                    width: 350,
                    height: 200,
                    border: '3px solid black',
                    top: 255,
                    left: 125,
                    backgroundColor: '#FAD6A5',
                    padding: '10px',
                    color: 'white',
                    fontSize: 40,
                    display: `${!isPlay ? 'block' : 'none'}`
                }}
                point={point}
                restart={isPlay}
                setRestart={setIsPlay}
                isPlay={isPlay}
                setName={setNameInput}
            />}

        </div>
    )
}

export default Game