import React from "react";
import { FaWifi } from "react-icons/fa";
import { IoReturnUpBackSharp } from "react-icons/io5";

const DataArea = ({ setDisplay, roomKey }) => {
  return (
    <div className="col-span-1 h-full flex flex-col justify-start p-4 rounded-lg bg-gradient-to-b from-[#2e2e2e] via-[#1e1e1e] to-[#121212] text-white shadow-inner max-sc:w-full max-sc:h-fit max-sc:py-2 animate-fade-in max-sm:flex-row gap-6 items-center  sd:gap-[4rem] ">
      <button
        className="w-full px-4 py-3 flex gap-2 items-center justify-center text-lg sm:text-xl rounded-md border border-white/20 backdrop-blur-md bg-white/5 active:scale-[0.97] focus:outline-none hover:bg-white/10 transition-all duration-300 ease-out shadow-md hover:shadow-white/20 animate-pulse max-sc:px-2 max-sc:py-2 max-sc:w-[40%] max-sk:my-0 max-sk:text-sm"
        onClick={() => setDisplay("intro")}
      >
        Leave Room
        <IoReturnUpBackSharp className="mt-[2px]" />
      </button>
      <p className="text-2xl max-sm:text-sm text-violet-500 sd:font-bold sc:w-full text-center  font-bold max-sc:text-lg ">
        {roomKey} Room's
      </p>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
      `}</style>
    </div>
  );
};

export default DataArea;
