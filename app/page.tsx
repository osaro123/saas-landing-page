import Banner from '@/components/Banner'
import CallToAction from '@/components/CallToAction'
import Faq from '@/components/Faq'
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
      <Faq/>
      <CallToAction/>
    </>
  )
}

export default Home