import React from 'react'
import { Audio, BallTriangle } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <>
            <BallTriangle color="#00BFFF" height={80} width={80} />
            <Audio
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />
        </>
    )
}
