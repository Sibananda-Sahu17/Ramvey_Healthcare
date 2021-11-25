import React, { useState } from "react";
import Axios from "axios";

function HomeForm() {
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

  // const resetForm = () => {
  //   setData({
  //     name: "",
  //     email: "",
  //     mobileno: "",
  //     address: "",
  //     message: "",
  //   });
  // };

  
  async function submitForm(e) {
    e.preventDefault();

    await Axios.post("http://localhost:5000/", data)
    form.reset();
    
  }

  return (
    <div className="flex justify-center">
      <div className="py-16 lg:container  w-full">
        <div className="lg:mx-64 md:mx-32  mx-12">
          <div className="text-center font-bold grad-color text-5xl">
            We Would Love To Hear From You
          </div>

          <form className="py-16 grid gap-6 " onSubmit={(e) => submitForm(e)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
              rows="5"
            />

            <button
              type="submit"
              className="p-3 btn-bg-color mx-32 xl:mx-64 lg:32 rounded-sm  font-medium focus:outline-none">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeForm;
