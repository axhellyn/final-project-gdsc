import React, { forwardRef } from 'react'
import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection'
import ProductsSection from '../components/ProductsSection';
import ContactUsSection from '../components/ContactUsSection';
import Footer from '../components/ui/Footer';

const HomePage = forwardRef((props, ref) =>{
  const {onClick} = props;

  return (
    <div>
    <HeroSection onClick={onClick} ref={ref}/>
    <AboutUsSection ref={ref}/>
    <ProductsSection/>
    <ContactUsSection/>
    </div>
  );
});
export default HomePage;
