import React, { forwardRef } from 'react'
import SecondaryButton from './ui/SecondaryButton'
import { FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import Donut from '../assets/donutAboutUs.png'
import Aos from "aos";
import 'aos/dist/aos.css';

const AboutUsSection = forwardRef((props, ref) => {
    Aos.init({once: true});

  return (
    <div className='mb-16 md:mb-0 min-h-fit md:h-screen w-full px-8 py-10 md:py-0 md:p-16' ref={ref}>
        <div className='w-full h-full flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-center'>
            <div className='w-full md:w-1/2 flex flex-col gap-4 md:pr-10' data-aos="fade-right" data-aos-duration="1000">
                <div className='flex gap-3'>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold'>About</h1>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold text-darkPurple'>Us</h1>
                </div>
                <p className='text-base md:text-lg py-4'>We are passionate about crafting delicious, high-quality donuts that bring joy to every bite. Since our start in 2024, we've been committed to using the best ingredients and traditional baking methods to create donuts that are both classic and innovative.</p>
                <div className='flex gap-4 items-center'>
                    <span className='text-darkPurple text-xl '>Our Social Media</span>
                    <SecondaryButton textButton={<FaInstagram className='h-6 w-6'/>}/>
                    <SecondaryButton textButton={<FiMail className='h-6 w-6'/>}/>
                </div>
            </div>

            <div className='w-full md:w-1/2 flex items-center justify-center md:justify-end' data-aos="fade-left" data-aos-duration="1000">
                <img src={Donut} alt="three donuts" />
            </div>
        </div>
    </div>
  );
});

export default AboutUsSection;
