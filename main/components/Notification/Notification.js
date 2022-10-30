import antd, { Button, Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const Notification = (props) => {
    // const { Col, Row } = antd;
    const router = useRouter()
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (props.name && props.name.length === 0) {
            setIsError(true)
        } else {
            setIsError(false)
        }
    }, [props.name])

    return (
        <div
            style={props.style}
        >

            <div
                style={{
                    border: '3px solid #FD841F',
                    height: '100%',
                    position: 'relative'
                }}
            >
                {props.isPlay &&
                    (
                        <div>
                            <p
                                style={{
                                    position: 'absolute',
                                    left: 5
                                }}
                            >
                                SCORE:
                            </p>
                            <p
                                style={{
                                    position: 'absolute',
                                    right: 10
                                }}
                            >
                                {props.point}
                            </p>
                            <button
                                style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    fontSize: 25,
                                    left: 102,
                                    backgroundColor: '#FD841F',
                                    border: '5px solid black',
                                    fontFamily: 'sans-serif',
                                    fontWeight: 800,
                                    width: 120,
                                    borderRadius: 20
                                }}
                                onClick={() => {
                                    router.reload()
                                }}
                            >
                                <div
                                    style={{
                                        border: '5px solid white',
                                        fontSize: 20,
                                        padding: 5,
                                        color: 'white',
                                        borderRadius: 20
                                    }}
                                >
                                    RESTART
                                </div>

                            </button>
                        </div>
                    )
                }
                {!props.isPlay &&
                    (
                        <div>
                            <input
                                type='text'
                                style={{
                                    width: 200,
                                    height: 50,
                                    position: 'absolute',
                                    top: 20,
                                    left: 62,
                                    borderRadius: 10,
                                    fontSize: 30,
                                    textAlign: 'center'
                                }}
                                placeholder="Your name"
                                required
                                onChange={(e) => {
                                    if (e.target.value.length === 0) {
                                        setIsError(true)
                                    }
                                    props.setName(e.target.value)
                                }}
                            />
                            {(isError) &&
                                (
                                    <p
                                        style={{
                                            color: 'red',
                                            fontSize: 16,
                                            position: 'absolute',
                                            fontFamily: 'sans-serif',
                                            textAlign: 'center',
                                            width: 150,
                                            left: 87,
                                            top: 75
                                        }}
                                    >
                                        Ban chua nhap ten!
                                    </p>
                                )
                            }

                            <button
                                style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    fontSize: 25,
                                    left: 102,
                                    backgroundColor: '#FD841F',
                                    border: '5px solid black',
                                    fontFamily: 'sans-serif',
                                    fontWeight: 800,
                                    width: 120,
                                    borderRadius: 20
                                }}
                                onClick={() => {
                                    if (props.name && props.name.length !== 0) {
                                        props.setRestart(true)
                                    } else {
                                        setIsError(true)
                                    }

                                }}
                            >
                                <div
                                    style={{
                                        border: '5px solid white',
                                        fontSize: 20,
                                        padding: 5,
                                        color: 'white',
                                        borderRadius: 20
                                    }}
                                >
                                    START
                                </div>

                            </button>
                        </div>
                    )
                }

            </div>
        </div >
    )
}

export default Notification
