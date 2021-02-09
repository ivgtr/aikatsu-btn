import React from 'react'
import { useRecoilValue } from 'recoil'
import { audioState } from '../utils/play'

const Control: React.FC = () => {
  const audio = useRecoilValue(audioState)

  return (
    <button
      onClick={() => {
        audio.pause()
        audio.currentTime = 0
      }}
      className="fixed right-4 top-4"
    >
      停止
    </button>
  )
}

export default Control
