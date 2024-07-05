import React from 'react'
import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection'
import ProductsSection from '../components/ProductsSection';
import ContactUsSection from '../components/ContactUsSection';
import Footer from '../components/ui/Footer';

function HomePage() {
  return (
    <div className='bg-gradient-to-br from-white via-softPink via-65%% to-white'>
    <Navbar/>
    <HeroSection/>
    <AboutUsSection/>
    <ProductsSection/>
    <ContactUsSection/>
    <Footer/>
    </div>
  )
}
export default HomePage;
