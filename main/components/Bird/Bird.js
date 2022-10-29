import { Image } from 'antd'
import React from 'react'

const Bird = (props) => {
    return (
        <div
        >
            <Image
                src='sprites/redbird-midflap.png'
                preview={false}
                style={props.style}
                width={70}
                height={50}
            />
        </div>
    )
}

export default Bird