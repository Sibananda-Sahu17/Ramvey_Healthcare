import React from "react";

function HomeForm() {
  return (
    <div className="flex justify-center">
      <div className="py-16 lg:container  w-full">
        <div className="lg:mx-64 md:mx-32  mx-12">
          <div className="text-center font-bold grad-color text-5xl">
            We Would Love To Hear From You
          </div>

          <form className="py-16 grid gap-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Name*"
              />
              <input
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Email*"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Mobile No*"
              />
              <input
                className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                placeholder="Address*"
              />
            </div>
            <textarea
              className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
              placeholder="Message*"
              rows="5"
            />

            <button
              type="submit"
              className="p-6 btn-bg-color mx-32 xl:mx-64 lg:32 rounded-sm  font-medium focus:outline-none">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeForm;
