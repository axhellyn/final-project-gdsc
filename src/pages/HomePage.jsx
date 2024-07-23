import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection'
import ProductsSection from '../components/ProductsSection';
import ContactUsSection from '../components/ContactUsSection';

/* eslint-disable react/display-name */
const HomePage = forwardRef(({ onClick }, ref) =>{
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

HomePage.propTypes = {
  onClick: PropTypes.func
}