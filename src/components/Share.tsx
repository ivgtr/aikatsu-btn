import React, { useState, useEffect } from 'react'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import kakugen from '../assets/kakugen.json'

const Share: React.FC = () => {
  const [shareTitle, setShareTitle] = useState<string>('')
  const randomTitle = () => {
    const { title, id } = kakugen[Math.floor(Math.random() * kakugen.length)]
    setShareTitle(`今週のアイカツ格言！\n${id}話 ${title}`)
  }
  useEffect(() => {
    randomTitle()
  }, [])
  return (
    <nav className="fixed right-4 bottom-4">
      <TwitterShareButton
        url="https://aikatsu.odayaka.work/"
        title={shareTitle}
        onClick={() => randomTitle()}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </nav>
  )
}

export default Share
