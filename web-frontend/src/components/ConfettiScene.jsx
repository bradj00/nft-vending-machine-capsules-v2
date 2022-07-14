import React, {useContext, useState}from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { NftMoreInfoContext } from '../App'

const ConfettiScene = (display) => {
    const { confettiDisplay, setconfettiDisplay} = useContext(NftMoreInfoContext);
    const { width, height } = useWindowSize()
    return (
        <div style={{display:{confettiDisplay}}}>
            <Confetti
                width={width}
                height={height}
            />
        </div>
    )
}

export default ConfettiScene