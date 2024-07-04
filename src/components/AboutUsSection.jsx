import React from 'react'
import SecondaryButton from './ui/SecondaryButton'
import { FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import Donut from '../assets/donutAboutUs.png'

export default function AboutUsSection() {
  return (
    <div className='h-screen w-full px-8 md:px-16'>
        <div className='w-full h-full flex flex-col gap-10 md:gap-0 md:flex-row items-center'>
            <div className='w-full md:w-1/2 flex flex-col gap-4 md:pr-10'>
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

            <div className='w-full md:w-1/2 flex items-center justify-center md:justify-end'>
                <img src={Donut} alt="three donuts" />
            </div>
        </div>
    </div>
  )
}
