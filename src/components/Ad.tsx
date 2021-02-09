import React from 'react'
import { Timeline } from 'react-twitter-widgets'

const Ad: React.FC = () => {
  return (
    <>
      <h2>
        毎週日曜あさ7時大好評放送中！{' '}
        <a
          href="http://www.aikatsu.net/"
          target="_brank"
          className="inline-block cursor-pointer text-blue-400 border-b border-blue-400"
        >
          アイカツプラネット！
        </a>
      </h2>

      <div className="flex flex-col sm:flex-row items-center">
        <div className="max-w-xs m-2">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'aikatsu_anime'
            }}
            options={{
              height: '400'
            }}
          />
        </div>
        <div className="max-w-md m-2">
          <img src="/logo.jpg" alt="logo" className="w-full" />
        </div>
      </div>
    </>
  )
}

export default Ad
