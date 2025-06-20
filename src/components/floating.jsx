/* eslint-disable no-empty */
import React, { useState } from "react";

const Floating = (props) => {
  const [value, setValue] = useState("");

  const handleWarning = (e) => {
    if (e.target.name == "roomId" && props.dad == "signUp") {
      if (e.target.value.length > 10) {
        setValue("id must be less than 10 Characters");
        return;
      }
    }
    setValue("");
  };

  return (
    <div className="w-8/10 relative">
      <input
        {...props}
        required
        autoComplete="off"
        placeholder=" "
        className={`w-full pt-4 pb-2 px-3 ${
          props.color ? props.color : "text-violet-300"
        } bg-white/10 backdrop-blur-md border border-white/30 rounded-md outline-none focus:ring-2 ${
          props.ring ? props.ring : "focus:ring-[#5eead4]"
        }  peer transition duration-300 placeholder-transparent `}
        onChange={handleWarning}
      />
      <label
        className={`absolute left-3 top-0 text-white text-sm transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-4px] peer-focus:text-sm ${
          props.uptext ? props.uptext : "peer-focus:text-[#5eead4]"
        }  bg-transparent max-sm:peer-placeholder-shown:text-sm`}
      >
        {props.label}
      </label>
      {value && <p className="mt-2 text-lg text-red-500">{value}</p>}
    </div>
  );
};

export default Floating;
