import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <>
      <Banner/>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
    </>
  )
}

export default Home