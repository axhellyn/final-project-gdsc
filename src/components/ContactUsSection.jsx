import React from "react";
import Button from "./ui/Button";
import ContactForm from "./ui/ContactForm";
import SecondaryButton from "./ui/SecondaryButton";
import { FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactUsSection() {
  return (
    <div className="min-h-screen md:h-screen px-8 py-10 md:px-16 md:py-20">
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
        <div className="w-full flex flex-col gap-8 md:w-1/2 md:mr-10">
          <div className="flex gap-3">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold ">
              Contact
            </h1>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-pink">
              Us
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-gray text-base xl:text-lg">
              We’d love to hear from you! Whether you have questions about our
              donuts, need help with your order, or just want to share your
              feedback, please reach out to us through one of the following
              methods:
            </p>

            <div className="flex gap-4 items-center">
              <SecondaryButton
                textButton={<FaWhatsapp className="h-6 w-6" />}
              />
              <SecondaryButton
                textButton={<FaInstagram className="h-6 w-6" />}
              />
              <SecondaryButton textButton={<FiMail className="h-6 w-6" />} />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
