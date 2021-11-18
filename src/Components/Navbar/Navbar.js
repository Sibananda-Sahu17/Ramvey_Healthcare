import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./Menu";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = menuItems.map(({ name, url, id }) => {
    return (
      <Link
        key={id}
        to={url}
        className="flex mt-2 mb-2 p-4 font-medium text-lg text-white hover:bg-gray-300 rounded-sm ">
        {name}
      </Link>
    );
  });

  return (
    <nav className="absolute z-10 fixed-top w-full">
      <div className="bg-gray-700 bg-opacity-50 flex mb-4">
        <div className="flex w-3/4  pl-10 ">
          <Link to="/" className="p-4 ">
            <h1 className="font-bold text-2xl text-white">Ramvey Healthcare</h1>
          </Link>
        </div>

        <div className=" lg:flex hidden mobile-menu w-1/2 justify-end pr-10">
          {menu}
        </div>
        <div className="  lg:hidden flex w-1/4 justify-end pr-10">
          <button
            onClick={() => setOpen(!open)}
            className="mt-2 mb-2 p-4 justify-end focus:outline-none">
            <GiHamburgerMenu size={25} />
          </button>
        </div>
      </div>
      <div>
        {open
          ? menuItems.map(({ name, url, id }) => (
              <div>
                <Link
                  key={id}
                  to={url}
                  className="lg:hidden block p-4 font-medium text-lg bg-gray-300 text-center">
                  {name}
                </Link>
              </div>
            ))
          : ""}
      </div>
    </nav>
  );
}

export default Navbar;
