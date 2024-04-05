import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'



export const Main = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <NewsLetter/>
    </div>
  )
}


