import React from 'react'
import { useRecoilValue } from 'recoil'
import { audioState } from '../utils/play'

const Control: React.FC = () => {
  const audio = useRecoilValue(audioState)

  return (
    <button
      onClick={() => {
        audio.play()
      }}
    >
      stop
    </button>
  )
}

export default Control
