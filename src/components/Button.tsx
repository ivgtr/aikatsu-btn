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
  const [audio, setAudio] = useRecoilState(audioState)

  const play = (link: string) => {
    setAudio(new Audio(link))
    audio.play()
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
