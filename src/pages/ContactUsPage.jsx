import React, { forwardRef, useRef } from "react";
import ContactUsSection from "../components/ContactUsSection";
import SecondaryButton from "../components/ui/SecondaryButton";
import Maps from "../components/Maps";

const ContactUsPage = forwardRef((props, ref) => {
  const { onClick } = props;

  return (
    <div>
      <div className="h-screen md:h-[85vh] px-8 md:px-16 py-10">
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-2 text-3xl md:text-4xl xl:text-5xl font-bold">
              <h1>Contact Us for a</h1>
              <h1 className="text-darkPink">Sweet</h1>
              <h1 className="text-darkPurple">Experience!</h1>
            </div>
            <p className="w-full md:w-4/5 text-sm md:text-base text-center text-gray">
              Our dedicated team is always ready to assist you with any
              inquiries or special requests you may have. From order tracking to
              custom donut designs, we're here to ensure your satisfaction.
            </p>
            <div className="mt-4">
              <SecondaryButton
                onClick={() => onClick(ref)}
                textButton={"Get In Touch"}
              />
            </div>
          </div>
        </div>
      </div>
      <ContactUsSection ref={ref} />
      <Maps/>
    </div>
  );
});

export default ContactUsPage;
