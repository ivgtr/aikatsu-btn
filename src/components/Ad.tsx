import React from 'react'

const Ad: React.FC = () => {
  return (
    <>
      <h2 className="mt-4">
        毎週日曜あさ7時大好評放送中！{' '}
        <a
          href="http://www.aikatsu.net/"
          target="_brank"
          className="inline-block cursor-pointer text-blue-400 underline"
        >
          アイカツプラネット！
        </a>
      </h2>
      <div className="max-w-md m-2">
        <img src="/planet.jpg" alt="アイカツプラネット！" className="w-full" />
      </div>
    </>
  )
}

export default Ad
