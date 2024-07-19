import React, { forwardRef } from 'react'
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection'
import ProductsSection from '../components/ProductsSection';
import ContactUsSection from '../components/ContactUsSection';

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
