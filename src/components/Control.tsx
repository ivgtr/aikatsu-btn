import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { audioState } from '../utils/play'
import kakugen from '../assets/kakugen.json'

const Control: React.FC = () => {
  const [audio, setAudio] = useRecoilState(audioState)

  useEffect(() => {}, [audio])

  const randomPlay = () => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
    const { link } = kakugen[Math.floor(Math.random() * kakugen.length)]
    const tmp = new Audio(link)
    setAudio(tmp)
    tmp.play()
  }

  return (
    <div className="fixed right-4 top-4">
      <button onClick={randomPlay} className="btn m-1 cursor-pointer">
        ランダム再生
      </button>
      <button
        onClick={() => {
          if (!audio) return
          audio.pause()
          audio.currentTime = 0
        }}
        className="btn m-1 cursor-pointer"
      >
        停止
      </button>
    </div>
  )
}

export default Control
