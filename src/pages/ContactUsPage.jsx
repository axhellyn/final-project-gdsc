import React, { useRef } from "react";
import ContactUsSection from "../components/ContactUsSection";
import SecondaryButton from "../components/ui/SecondaryButton";

export default function ContactUsPage() {
    const contactUsSection = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <div>
      <section className="h-screen md:h-[80vh] px-8 md:px-16 py-10">
        <div className="h-full flex justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-wrap justify-center items-center gap-2 text-3xl md:text-4xl xl:text-5xl font-bold">
                    <h1>Contact Us for a</h1>
                    <h1 className="text-darkPink">Sweet</h1>
                    <h1 className="text-darkPurple">Experience!</h1>
                </div>
                <p className="w-full md:w-4/5 text-sm md:text-base text-center text-gray">Our dedicated team is always ready to assist you with any inquiries or special requests you may have. From order tracking to custom donut designs, we're here to ensure your satisfaction.</p>
                <div className="mt-4">
                    <SecondaryButton onClick={() => scrollToSection(contactUsSection)} textButton={"Get In Touch"}/>
                </div>
            </div>
        </div>
      </section>

            <ContactUsSection ref={contactUsSection}/>
      <section className="h-fit mt-10 px-8 py-10 md:px-16">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-3xl md:text-4xl xl:text-5xl font-bold">
            <h1>Find</h1>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-pink">
              Us
            </h1>
            <h1>on Google Maps</h1>
          </div>

          <div className="w-full md:w-2/3 text-sm md:text-base text-center text-gray">
            <p>
              Easily locate our store and indulge in your favorite donuts with
              just a few clicks. Use Google Maps to find the quickest route to
              our shop and make your journey to sweetness smooth and simple.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.44554033854!2d104.68056108916906!3d-2.954794053729677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75e8fc27a3e3%3A0x3039d80b220d0c0!2sPalembang%2C%20Kota%20Palembang%2C%20Sumatera%20Selatan!5e0!3m2!1sid!2sid!4v1721112328043!5m2!1sid!2sid"
            width="100%"
            height="350"
            className="border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
