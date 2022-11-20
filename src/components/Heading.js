import React from "react";
import { useState } from "react";
import { useRef } from "react";
function Heading() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
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
        <div className="min-w-[240px] text-center">Profile</div>
      </div>
    </>
  );
}

export default Heading;
