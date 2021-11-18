import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
function HomeCareer() {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full py-6 bg-gray-400 flex  flex-col lg:flex-row lg:justify-evenly">
      <h1 className="text-4xl font-bold lg:text-left text-center">
        Want to work with Kaymed?
      </h1>
      <div className=" flex flex-wrap justify-center lg:my-0 my-6">
        <div className="bg-white py-2 rounded-md ">
          <button
            className=" px-6 py-4 font-medium uppercase text-2xl focus:outline-none"
            onClick={() => {
              history.push("/careers");
            }}>
            Careers
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCareer;
