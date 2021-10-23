import React from 'react'

export default function HotLevel(props) {
    const { hotLevel } = props

    const heart = cb => cb()


    return (
        <>{heart(() => {
            const heart = []
            for (let i = 0; i < hotLevel; i++) {
                heart.push(<i className='fa fa-heart' style={{ color: 'white', fontSize: `1${i}px` }}></i>)
            }
            return heart
        })}</>
    )
}

