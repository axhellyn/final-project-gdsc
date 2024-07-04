import React from 'react'
import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection'
import ProductsSection from '../components/ProductsSection';

function HomePage() {
  return (
    <div className='bg-gradient-to-br from-white via-softPink via-65%% to-white'>
    <Navbar/>
    <HeroSection/>
    <AboutUsSection/>
    <ProductsSection/>
    </div>
  )
}
export default HomePage;
