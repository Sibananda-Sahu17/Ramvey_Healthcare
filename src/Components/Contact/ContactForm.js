import React, { useState } from "react";
import Axios from "axios";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobileno: "",
    address: "",
    message: "",
    sent: true,
    err: "",
  });

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      mobileno: "",
      address: "",
      message: "",
      err: "",
    });
  };
  
  const submitForm =  (e) => {
    e.preventDefault();

    try {
      Axios.post("http://localhost:5000/contact/", data)
      resetForm();
    }
    catch (err) {
      console.log(err)
    }
  }

    return (
      <div className="flex flex-wrap lg:justify-end justify-center">
        <div className="">
          <div className="text-xl m-1 mt-3 text-center font-bold sm:text xl sm:m-3 sm:mt-5 md:text-2xl md:m-5 md:mt-7 lg:text-3xl lg:m-7 lg:mt-5">
            <h1>Get in Touch!!</h1>
          </div>

          <form className="flex flex-col gap-4" onSubmit={submitForm}>
            <div className="flex sm:flex-row flex-col gap-4">
              <input
                className="shadow-inner bg-gray-200 p-3  rounded-md focus:outline-none text-lg"
                placeholder="Name*"
                name="name"
                id="name"
                value={data.name}
                onChange={handleChange}
              />
              <input
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Email*"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-4">
              <input
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Mobile No*"
                name="mobileno"
                value={data.mobileno}
                id="mobileno"
                onChange={handleChange}
              />
              <input
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Address*"
                name="address"
                id="address"
                value={data.address}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
              placeholder="Message*"
              name="message"
              id="message"
              value={data.message}
              onChange={handleChange}
              rows="3"
            />

            <button
              type="submit"
              className="btn-bg-color py-3 px-0 md:mx-32 rounded-md text-white font-medium focus:outline-none">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    );
  }
// }
export default ContactForm;
