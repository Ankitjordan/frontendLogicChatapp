/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoReturnUpBackSharp } from "react-icons/io5";

const Intro = ({ setDisplay }) => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-white via-blue-100 to-purple-200 px-6 py-12 text-center overflow-hidden">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-600 mb-10 max-md:text-3xl animate-fade-in-up">
        Welcome to <span className="text-purple-600">ChatJod 🚀</span>
      </h1>

      <p className="max-w-4xl text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mb-12 animate-fade-in">
        Welcome to a real-time messaging platform built for speed, simplicity,
        and seamless connection. Whether you're chatting with friends or
        collaborating with a team, this app ensures fast and secure
        communication powered by modern technologies like Socket.IO, Express,
        and MongoDB. With a sleek user interface and efficient backend, you can
        enjoy smooth message delivery, dynamic room handling, and user-friendly
        experience — all in one powerful chat solution.
      </p>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-xl animate-fade-in-up">
        <button
          className="px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-md w-full sm:w-auto"
          onClick={() => setDisplay("signup")}
        >
          Create New Chat Room
        </button>

        <button
          className="px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-md w-full sm:w-auto"
          onClick={() => setDisplay("login")}
        >
          Join Existing Chat Room
        </button>
      </div>

      <button
        className="absolute bottom-4 right-4 backdrop-blur-md bg-white/30 hover:bg-white/50 p-3 rounded-full shadow-md text-purple-600 transition-all duration-300"
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

export default Intro;
