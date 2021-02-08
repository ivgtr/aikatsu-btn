import React from 'react'
import { useSetRecoilState } from 'recoil'
import { audioState } from '../utils/play'

type props = {
  kakugen: {
    id: number
    title: string
    link: string
  }[]
}

const Button: React.FC<props> = (props) => {
  const setAudio = useSetRecoilState(audioState)

  const play = (link: string) => {
    setAudio(new Audio(link))
  }

  return (
    <div>
      {props.kakugen.map((item, index) => {
        return (
          <button
            onClick={() => {
              play(item.link)
            }}
            key={index}
          >{`${item.id} ${item.title}`}</button>
        )
      })}
    </div>
  )
}

export default Button
