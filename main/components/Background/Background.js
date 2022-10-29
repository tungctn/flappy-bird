import React from 'react'
import { Image } from 'antd'

const Background = (props) => {
    return (
        <div
            style={props.style}
        >
            <Image
                style={{
                    width: '100%',
                    height: '510px'
                }}
                src='sprites/background-day.png'
                preview={false}
            />
            <Image
                style={{
                    width: '100%',
                    height: '200px'
                }}
                src='sprites/base.png'
                preview={false}
            />
        </div>
    )
}

export default Background