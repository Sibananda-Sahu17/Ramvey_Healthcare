import React from 'react'

function HomeForm() {
    return (
      <div className="pt- flex justify-center">
        <div className="py-16 container ">
          <div className="mx-64">
            <div className="text-center font-bold text-5xl">
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
              <div className="grid grid-cols-2 gap-4 ">
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

            <button type="submit" className="p-6 bg-gray-700 mx-6 sm:mx-32 lg:mx-64 rounded-sm text-white font-medium hover:bg-gray-500 hover:text-black focus:outline-none"> 
                SUBMIT NOW
            </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default HomeForm
