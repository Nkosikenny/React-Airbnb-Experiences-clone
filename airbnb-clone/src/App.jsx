import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./components/data"


function App() {
  const cardComponents = data.map(item => {
    return (<Card
      key={item.id}
      item={item}
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
