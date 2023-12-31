import React, { useState } from "react";
import { Link } from "react-router-dom";
import kengan01 from "../assets/kengan01.jpg";
import sin01 from "../assets/sin01.jpg";
import fairy01 from "../assets/fairy01.jpg";
import mob01 from "../assets/mob01.jpg";
function HomeNav() {
  const [isHovered, setIsHovered] = useState("");
  return (
    <>
      {/* Home Nav */}
      <div className="bg-gray-900 w-96 h-96 z-10">
        <div className="flex h-1/2 w-full">
          <Link to="/Comparisons" className="w-full h-full">
            <div
              className={`h-full w-full  hover:scale-110 hover:-translate-x-10 hover:-translate-y-10 
                                      hover:shadow-lg cursor-pointer
                                      hover:bg-white
                                      hover:text-black
                                      border-2
                                      hover:border-black 
                                      duration-300 ease-in-out
                                      bg-black
                                      text-white
                                      `}
              onMouseEnter={() => setIsHovered("block1")}
              onMouseLeave={() => setIsHovered("")}
            >
              <div className="py-10 px-5">
                <h1 className="text-2xl font-semibold text-center ">
                  Comparisons
                </h1>
                <p className="text-gray-400 font-semibold text-center">
                  Manga Recommendations
                </p>
              </div>
            </div>
          </Link>
          <Link to="/Resources" className="w-full h-full">
            <div
              className={`h-full w-full  hover:scale-110 hover:translate-x-10 hover:-translate-y-10 
                          hover:shadow-lg cursor-pointer
                          hover:bg-white
                            hover:text-black
                            border-2
                            hover:border-black 
                            duration-300 ease-in-out
                            bg-black
                            text-white
                          `}
              onMouseEnter={() => setIsHovered("block2")}
              onMouseLeave={() => setIsHovered("")}
            >
              <div className="py-10 px-5">
                <h1 className="text-2xl font-semibold text-center ">
                  Resources
                </h1>
                <p className="text-gray-400 font-semibold text-center">
                  Drawing Tutorials
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex h-1/2 w-full">
          <Link to="/Collection" className="w-full h-full">
            <div
              className={`h-full w-full hover:scale-110 hover:-translate-x-10 hover:translate-y-10 
                              hover:shadow-lg cursor-pointer
                              hover:bg-white
                                      hover:text-black
                                      border-2
                                      hover:border-black 
                                      duration-300 ease-in-out
                                      bg-black
                                      text-white
                              `}
              onMouseEnter={() => setIsHovered("block3")}
              onMouseLeave={() => setIsHovered("")}
            >
              <div className="py-10 px-5">
                <h1 className="text-2xl font-semibold text-center ">
                  Collection
                </h1>
                <p className="text-gray-400 font-semibold text-center">
                  Drawing References
                </p>
              </div>
            </div>
          </Link>
          <Link to="/Tips" className="w-full h-full">
            <div
              className={`h-full w-full hover:scale-110 hover:translate-x-10 hover:translate-y-10 
                              hover:shadow-lg cursor-pointer
                              hover:bg-white
                              hover:text-black
                              border-2
                              hover:border-black 
                              duration-300 ease-in-out
                              bg-black
                              text-white
                              `}
              onMouseEnter={() => setIsHovered("block4")}
              onMouseLeave={() => setIsHovered("")}
            >
              <div className="py-10 px-5">
                <h1 className="text-2xl font-semibold text-center ">Tips</h1>
                <p className="text-gray-400 font-semibold text-center">
                  Manga Drawing Techniques
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Background */}
      <div className="absolute h-full w-full z-0">
        <div className="w-full h-1/2 flex">
          <div
            className={`w-1/2 h-full ease-in-out duration-1000 overflow-hidden
                      ${
                        isHovered === "block1"
                          ? "bg-slate-300 opacity-80"
                          : "bg-slate-400 opacity-20 "
                      }`}
          >
            <img src={kengan01} alt="" />
          </div>
          <div
            className={`w-1/2 h-full ease-in-out duration-1000 overflow-hidden
                          ${
                            isHovered === "block2"
                              ? "bg-slate-400 opacity-80"
                              : "bg-slate-500 opacity-20 "
                          }`}
          >
            <img src={sin01} alt="" />
          </div>
        </div>
        <div className="w-full h-1/2 flex">
          <div
            className={`w-1/2 h-full ease-in-out duration-1000 overflow-hidden
                          ${
                            isHovered === "block3"
                              ? "bg-slate-500 opacity-80"
                              : "bg-slate-600 opacity-20 "
                          }`}
          >
            <img src={fairy01} alt="" />
          </div>
          <div
            className={`w-1/2 h-full ease-in-out duration-1000 overflow-hidden
                          ${
                            isHovered === "block4"
                              ? "bg-slate-600 opacity-80"
                              : "bg-slate-700 opacity-20 "
                          }`}
          >
            <img src={mob01} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeNav;
