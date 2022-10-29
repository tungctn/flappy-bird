import antd, { Button, Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const Notification = (props) => {
    // const { Col, Row } = antd;
    const router = useRouter()
    const { info, setInfo } = useContext(AppContext)
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
                                    props.setName(e.target.value)
                                }}
                            />
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
                                    props.setRestart(true)
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
