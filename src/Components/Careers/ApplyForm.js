import React from "react";

function ApplyForm() {
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
              />
              <input
                type="text"
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Email*"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 ">
              <input
                type="text"
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Mobile No*"
              />

              <div className="flex flex-col">
                <label className=" font-bold focus:outline-none">
                  Resume Upload
                </label>
                <input type="file" />
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
