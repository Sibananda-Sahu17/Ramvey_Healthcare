import React, { useState } from "react";
import Axios from "axios";

function ApplyForm() {

    const [data, setData] = useState({
      name: "",
      email: "",
      mobileno: "",
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
    //   });
    // };
  
  
    async function submitForm(e) {
      e.preventDefault();
  
      await Axios.post("http://localhost:5000/", data)
  
    }

  return (
    <div className="flex justify-center flex-wrap overflow-hidden">
      <div className="py-6 lg:container ">
        <div className="lg:mx-64 md:mx-32  mx-12">
          <div className="text-center font-bold text-5xl">Apply</div>

          <form className="py-16 grid gap-6 ">
            <div className="grid grid-cols-1 gap-4 ">
              <input
                type="text"
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Name*"
                name="name"
                id="name"
                value={data.name}
                onChange={handleChange}
              />
              <input
                type="text"
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Email*"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 ">
              <input
                type="text"
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Mobile No*"
                name="mobileno"
                value={data.mobileno}
                id="mobileno"
                onChange={handleChange}
              />

              <div className="flex flex-col" onSubmit={(e) => submitForm(e)}>
                <label className=" font-bold focus:outline-none">
                  Resume Upload
                </label>
                <input type="file" />
              </div>
            </div>
            <button
              type="submit"
              className="btn-bg-color btn-bg-color:hover p-3 bg-gray-700 rounded-md text-white font-medium hover:bg-gray-500 hover:text-black focus:outline-none"
              onClick={async (e) => {
                e.preventDefault();
                const data = await Axios.get("http://localhost:5000/careers");
                alert(data.data);
              }}>
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
