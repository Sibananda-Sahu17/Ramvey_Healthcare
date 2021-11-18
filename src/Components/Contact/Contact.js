import React from "react";
import contact from "../Images/contact.jpeg";
import ContactForm from "./ContactForm";
import AddressDetails from "./AddressDetails";

function Contact() {
  return (
    <div>
      <div className="">
        <div className="flex justify-center items-center">
          <h1 className="flex absolute tracking-widest text-white text-center font-bold text-base p-19 sm:font-bold sm:text-2xl md:font-bold md:text-3xl lg:font-extrabold lg:text-4xl xl:font-extrabold xl:text-5xl">
            We are proud of our reputation <br />
            for delivering the highest quality work
          </h1>
          <img className="w-full h-auto" src={contact} alt="contact" />
        </div>

        <div className="my-16 mx-4">
          <h1 className="text-center m-10 text-2xl mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">
            Kaymed Pharmaceuticals Pvt. Ltd.
          </h1>
          <div className="flex overflow-hidden  justify-center items-center">
            <div className="flex  lg:flex-row lg:justify-between flex-col border-2 my-6  md:mx-6 w-8xl px-32 py-16 rounded-xl shadow-lg">
              <div className="flex justify-center lg:mr-16 my-8 lg:text-left text-center">
                <AddressDetails />
              </div>
              <div className="flex lg:w-1/2 w-full lg:justify-end justify-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;