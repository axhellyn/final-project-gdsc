import React from 'react'
import Navbar from '../components/ui/Navbar'
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection'

function HomePage() {
  return (
    <div className='bg-gradient-to-br from-white via-softPink via-65%% to-white'>
    <Navbar/>
    <HeroSection/>
    <AboutUsSection/>
    </div>
  )
}
export default HomePage;
