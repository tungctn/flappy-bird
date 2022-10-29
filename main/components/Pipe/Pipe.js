import { Image } from 'antd'
import React from 'react'

const Pipe = (props) => {
    return (
        <div style={{
            width: '100px'
        }}>
            <Image
                width={props.width}
                height={props.height}
                src='sprites/pipe-red.png'
                preview={false}
                style={
                    props.style
                }
            />
        </div>
    )
}

export default Pipe