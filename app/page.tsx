import Banner from '@/components/Banner'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Navbar from '@/components/Navbar'
import ProductShowcase from '@/components/ProductShowcase'
import React from 'react'

const Home = () => {
  return (
    <>
      <Banner/>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Features/>
      <ProductShowcase/>
    </>
  )
}

export default Home