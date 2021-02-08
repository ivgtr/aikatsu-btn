import React, { FC } from 'react'
import Button from '../components/Button'
import kakugen from '../assets/kakugen.json'

const Home: FC = () => {
  return (
    <div className="wrapper text-center">
      <p>top</p>
      <Button kakugen={kakugen} />
    </div>
  )
}

export default Home
