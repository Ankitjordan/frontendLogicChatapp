/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Floating from "./floating.jsx";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoReturnUpBackSharp } from "react-icons/io5";

const Signup = ({ setDisplay, setRoomKey }) => {
  const [showHelp, setShowHelp] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;

    try {
      const res = await axios.post("http://172.20.10.9:4000/newroom", {
        name: target.name.value,
        roomId: target.roomId.value,
        password: target.password.value,
      });
      setRoomKey(target.name.value);
      setDisplay("msgarea");
    } catch (error) {
      console.log(error.response);
    }
    target.reset();
  };

  return (
    <div className="relative min-h-screen w-screen flex justify-center items-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4 py-12 overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400">
        ChatJod 🚀
      </div>

      {/* Back Button with Tooltip */}
      <div className="absolute top-6 left-4 group">
        <button
          className="text-cyan-300 border border-cyan-300 rounded-md p-2 hover:bg-cyan-300/10 shadow-md shadow-cyan-300/30 transition duration-300 sd:px-4"
          onClick={() => setDisplay("intro")}
        >
          <IoReturnUpBackSharp className="text-xl" />
        </button>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Home
        </div>
      </div>

      {/* Signup Form */}
      <form
        className="flex flex-col max-sd:w-full w-[50%] sm:gap-[2rem] items-center gap-4 animate-fade-in-up"
        onSubmit={handleFormSubmit}
      >
        <Floating name={"name"} label={"UserName"} type={"text"} />
        <Floating
          name={"roomId"}
          label={"Set Room Id"}
          type={"text"}
          maxLength={10}
          dad={"signUp"}
        />
        <Floating
          name={"password"}
          label={"Set Room Key"}
          type={"password"}
          minLength={6}
        />

        <button
          type="submit"
          className="text-white px-6 py-2 mt-4 border border-blue-400 rounded-md hover:bg-blue-500/20 hover:border-blue-500 transition duration-300"
        >
          Create Room
        </button>
      </form>

      {/* Help Button */}
      <button
        className="absolute bottom-4 right-4 backdrop-blur-md bg-white/20 hover:bg-white/30 p-3 rounded-full shadow-md text-purple-300 transition-all duration-300"
        onClick={() => setShowHelp(!showHelp)}
      >
        <BsQuestionCircleFill className="text-2xl" />
      </button>

      {showHelp && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-6">
          <div className="bg-white max-h-[80vh] overflow-auto w-full max-w-2xl rounded-xl p-6 text-gray-800 shadow-lg relative animate-fade-in text-left">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">
              How to use ChatJod
            </h2>
            <ul className="space-y-4 text-sm sm:text-base">
              <li>
                • On the home page, you will see two buttons:{" "}
                <strong>Create New Chat Room</strong> and{" "}
                <strong>Join Existing Chat Room</strong>.
              </li>
              <li>
                • A room allows you to chat privately with friends or teammates.
              </li>
              <li>
                • To start a new chat space, click on{" "}
                <strong>Create New Chat Room</strong>. Enter your name, set a
                room ID, and create a password.
              </li>
              <li>
                • You will be taken to a private chat area. Now, share the room
                ID and password with the person you want to chat with.
              </li>
              <li>
                • They should go to the home screen and click{" "}
                <strong>Join Existing Chat Room</strong>.
              </li>
              <li>
                • Enter the exact room ID and password (case-sensitive) that you
                shared with them.
              </li>
              <li>
                • Now you both can start private chatting easily and securely.
              </li>
            </ul>
            <button
              onClick={() => setShowHelp(false)}
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Signup;
