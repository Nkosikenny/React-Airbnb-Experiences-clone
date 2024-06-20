import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./components/data"


function App() {
  const cardComponents = data.map(item => {
    return (<Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className='card-component'>
        {cardComponents}
      </section>

    </>
  )
}

export default App
