import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import logo from "../Images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = menuItems.map(({ name, url, id }) => {
    return (
      <Link
        key={id}
        to={url}
        className="flex mt-2 mb-2 p-4 font-medium text-lg navbarhover rounded-sm ">
        {name}
      </Link>
    );
  });

  return (
    <nav className="fixed-top w-full">
      <div className="grad flex ">
        <div className="flex w-3/4  pl-2 ">
          <Link to="/" className="p-4 ">
            <img src={logo} className="w-10" alt="Ramvey Healthcare"/>
            {/* <h1 className="font-bold text-2xl">Ramvey Healthcare</h1> */}
          </Link>
        </div>

        <div className=" lg:flex hidden mobile-menu w-1/2 justify-end pr-10">
          {menu}
        </div>
        <div className="  lg:hidden flex w-1/4 justify-end pr-10">
          <button
            onClick={() => setOpen(!open)}
            className="mt-2 mb-2 p-4 justify-end focus:outline-none">
            {open ? <AiOutlineCloseSquare size={25}/> : <GiHamburgerMenu size={25} />}
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
