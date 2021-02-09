import React from 'react'
import { useRecoilState } from 'recoil'
import { audioState } from '../utils/play'

type props = {
  kakugen: {
    id: number
    title: string
    link: string
  }
}

const Button: React.FC<props> = ({ kakugen }) => {
  const [audio, setAudio] = useRecoilState<HTMLAudioElement>(audioState)

  const play = (link: string) => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
    const tmp = new Audio(link)
    setAudio(tmp)
    tmp.play()
  }

  return (
    <button
      onClick={() => {
        play(kakugen.link)
      }}
      className="m-1"
    >{`${kakugen.id} ${kakugen.title}`}</button>
  )
}

export default Button
