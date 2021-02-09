import React, { FC } from 'react'
import Button from '../components/Button'
import Ad from '../components/Ad'
import kakugen from '../assets/kakugen.json'

const Home: FC = () => {
  return (
    <div className="container mx-auto px-2">
      <h1 className="text-center my-12 text-2xl font-bold">アイカツ！格言ボタン</h1>
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
              return <Button key={`s1${index}`} kakugen={item} />
            })}
        </section>
        <section className="my-8">
          <h2 className="text-lg">3rd Season</h2>
          {kakugen
            .filter((item) => {
              return item.season === '3'
            })
            .map((item, index) => {
              return <Button key={`s1${index}`} kakugen={item} />
            })}
        </section>
      </article>
    </div>
  )
}

export default Home
