import React from "react";
import Axios from "axios";

function ApplyForm() {
  const formData = new FormData();


const handleChange = (e) => {
  if (e.target.id === "file") {
    formData.append("file", e.target.files[0]);
  }
  else {
    formData.append(`${e.target.id}`,e.target.value)
   
  }
};


  const submitForm = async(e) => {
    e.preventDefault();
    
    try {
      const response = await Axios.post("http://localhost:5000/careers/", formData);
      if (response.status === 200)
      {
        alert("Success")
        e.target.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="flex justify-center flex-wrap overflow-hidden">
      <div className="py-6 lg:container ">
        <div className="lg:mx-64 md:mx-32  mx-12">
          <div className="text-center font-bold text-5xl">Apply</div>

          <form className="py-16 grid gap-6 " onSubmit={submitForm}>
            <div className="grid grid-cols-1 gap-4 ">
              <input
                type="text"
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Name*"
                name="name"
                id="name"
                
                onChange={handleChange}
              />
              <input
                type="text"
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Email*"
                name="email"
                id="email"
                
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 ">
              <input
                type="text"
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Mobile No*"
                name="mobileno"
                
                id="mobileno"
                onChange={handleChange}
              />

              <div className="flex flex-col" >
                <label className=" font-bold focus:outline-none">
                  Resume Upload
                </label>
                <input
                  type="file"
                  id="file"
                  
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx,application/msword"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn-bg-color btn-bg-color:hover p-3 bg-gray-700 rounded-md text-white font-medium hover:bg-gray-500 hover:text-black focus:outline-none">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
