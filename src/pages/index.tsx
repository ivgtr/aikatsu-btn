import React, { FC } from 'react'
import { Timeline } from 'react-twitter-widgets'

import Button from '../components/Button'
import Ad from '../components/Ad'
import kakugen from '../assets/kakugen.json'

const Home: FC = () => {
  return (
    <div className="container mx-auto px-2">
      <h1 className="text-center mt-12 text-2xl font-bold">アイカツ！格言ボタン</h1>
      <Ad />
      <article>
        <section className="my-8">
          <h2 className="text-lg">1st Season</h2>
          {kakugen
            .filter((item) => {
              return item.season === '1'
            })
            .map((item, index) => {
              return <Button key={`s1${index}`} kakugen={item} />
            })}
        </section>
        <section className="my-8">
          <h2 className="text-lg">2nd Season</h2>
          {kakugen
            .filter((item) => {
              return item.season === '2'
            })
            .map((item, index) => {
              return <Button key={`s2${index}`} kakugen={item} />
            })}
        </section>
        <section className="my-8">
          <h2 className="text-lg">3rd Season</h2>
          {kakugen
            .filter((item) => {
              return item.season === '3'
            })
            .map((item, index) => {
              return <Button key={`s3${index}`} kakugen={item} />
            })}
        </section>
      </article>

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
    </div>
  )
}

export default Home
