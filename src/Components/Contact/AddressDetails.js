import React from 'react'
import { FaMapSigns } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
function AddressDetails() {
    return (
      <div>
        <div>
          <p>Please contact us using the information below.</p>
        </div>

        <div className="flex flex-col lg:w-1/2">
          <div className="flex flex-wrap  flex-col lg:justify-start justify-center  ">
            <p className="mt-6 flex font-bold lg:w-48 text-lg lg:justify-start justify-center">
              <FaMapSigns className="mr-2 mb-2" size={20} />
              Registered Office
            </p>
            <p className="flex justify-center">
              Mez &amp; First Floor, A-83, Okhla Phase - 2
            </p>
            <p>South Delhi, Delhi -110020 </p>
          </div>

          <div>
            <p className="my-6 flex text-lg lg:justify-start justify-center">
              <IoCall className="mr-2 mb-2" size={20} />
              +91-8948333866
            </p>
          </div>
          <div>
            <p className="my-6 flex text-lg lg:justify-start justify-center ">
              <a
                className=" flex text-lg  "
                href="mailto: info@kaymedpharma.com">
                <GrMail className="mr-2 mb-2" size={20} />
                info@kaymedpharma.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default AddressDetails
