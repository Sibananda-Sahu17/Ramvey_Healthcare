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
          <img className="w-full h-auto"
            src={contact}
            alt="contact" />
        </div>

        <h1 className="text-center m-10 text-2xl m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">Kaymed Pharmaceuticals Pvt. Ltd.</h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-col border-2 my-6 md:flex-row md:mx-6 md:my-0 w-8xl p-8 rounded-xl shadow-lg">
            <div className="flex flex-col m-3 justify-between">
              <AddressDetails />
            </div>
            <div className="flex w-1/2 justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;