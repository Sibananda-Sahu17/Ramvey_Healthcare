import React from 'react'
import {Link} from 'react-router-dom'
function HomeCareer() {
    return (
      <div className="w-full py-6 bg-gray-400 grid grid-cols-2 justify-items-center content clearfix">
        <h1 className="text-4xl font-bold">Want to work with Kaymed?</h1>
        <div className=" grid grid-cols-4 ">
          <div className="bg-white py-2 rounded-md ">
            <Link
              className=" px-6 py-4 font-medium uppercase text-2xl"
              to="/careers">
              Careers
            </Link>
          </div>
        </div>
      </div>
    );
}

export default HomeCareer
