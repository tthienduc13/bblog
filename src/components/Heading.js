import React from "react";
import { useState } from "react";
import { useRef } from "react";
function Heading() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="h-14 fixed z-10 w-full bg-white drop-shadow-lg flex flex-row justify-center items-center px-40">
        <div className="font-bold text-3xl block text-center text-[#534deb]  min-w-[240px]">
          BBLOG
        </div>
        <div className="flex-grow text-center">
          <input
            className="outline-none bg-[#f0f2f5] rounded-2xl border-none py-2 px-4  "
            placeholder="Search for the blog...."
            onClick={handleClick}
            style={{
              width: active ? "720px" : "210px",
              transition: "linear,1s",
            }}
          ></input>
        </div>
        <div className="min-w-[240px] text-center h-full flex flex-row justify-center items-center">
          <div className="px-2 ">
            <img
              className="h-[40px] w-[40px] rounded-full inline-block"
              src={require("../assets/img/avatar.jpg")}
            ></img>
          </div>
          <div className="px-2 border-r-2 border-l-2 border-l-[#cccc] border-r-[#cccc]  relative">
            <p className="font-semibold opacity-80">Thiện Đức</p>
            <button
              className="ml-4 absolute top-[-3px] right-[-20px]"
              onClick={() => setShowMore(!showMore)}
            >
              <i class="fa-solid fa-sort-down"></i>
            </button>
            {showMore && (
              <div className="p-2 absolute w-[140px] border-2  shadow-xl rounded-xl top-[30px] bg-[white] flex flex-col items-start text-left">
                <a
                  href="#"
                  className="px-[10px] rounded-lg w-full hover:bg-slate-200 py-[10px]"
                >
                  <i className="fa-solid  fa-house-user mr-2"></i>Home
                </a>
                <a
                  href="#"
                  className="px-[10px] rounded-lg w-full hover:bg-slate-200 py-[10px]"
                >
                  <i className="fa-solid  fa-gear mr-2"></i>
                  Settings
                </a>
                <a
                  href="#"
                  className="px-[10px] rounded-lg w-full hover:bg-slate-200 py-[10px]"
                >
                  <i className="fa-solid  fa-circle-info mr-2"></i>
                  Help
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
