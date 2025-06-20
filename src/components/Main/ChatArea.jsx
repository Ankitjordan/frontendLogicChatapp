/* eslint-disable no-empty */
import React, { useEffect, useState } from "react";
import socket from "../../socket.js";
import { IoSendOutline } from "react-icons/io5";
import axios from "axios";

const ChatArea = ({ roomKey }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMsg = async () => {
      try {
        const info = await axios.post(
          "https://backendchat-production-8200.up.railway.app/messagedata",
          {
            name: roomKey,
          }
        );
        const msgArray = info.data.map((x) => x.msg);
        setMessages(msgArray);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMsg();
  }, []);

  useEffect(() => {
    if (!socket.connected) socket.connect();
    socket.emit("join-room", roomKey);
    socket.on("receive-message", (message) => {
      setMessages((pre) => [...pre, message]);
    });

    return () => {
      socket.off("receive-message");
    };
  }, []);

  const handleSend = async () => {
    if (!message.trim()) return;
    socket.emit("send-message", { roomKey, message });
    try {
      const res = await axios.post(
        "https://backendchat-production-8200.up.railway.app/messageroom",
        {
          name: roomKey,
          message: message,
        }
      );

      console.log(res.data.feedback);
    } catch (error) {
      console.log("error while sending message");
    }
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="col-span-2 h-full order-2 flex flex-col max-sc:w-screen">
      <div className="flex-1 rounded-lg overflow-y-auto p-4 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] backdrop-blur-sm bg-opacity-90 animate-fade-in">
        <div className="flex flex-col gap-3">
          {messages.map((element, index) => (
            <div
              key={index}
              className="inline-block max-w-[75%] rounded-xl text-blue-100 text-lg px-4 py-2 break-words self-start backdrop-blur-sm bg-blue-500/10 border border-blue-200/20 shadow-md animate-slide-up"
            >
              {element}
            </div>
          ))}
        </div>
      </div>

      <div className="h-[8%] w-full flex justify-center mt-4 gap-2 items-center px-2 max-sm:h-[12%] max-sm:mt-6 max-sc:w-[80vw]">
        <input
          className="flex-1 h-12 border-2 border-purple-500 rounded-full text-lg px-4 focus:outline-none text-white bg-white/10 placeholder:text-white/70 transition-all duration-300 focus:ring-2 focus:ring-purple-400 shadow-md backdrop-blur-sm animate-pulse "
          placeholder="Start Messaging"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <button
          type="submit"
          className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 rounded-full text-white transition-all duration-300 shadow-lg hover:scale-105"
          onClick={handleSend}
        >
          <IoSendOutline className="text-2xl" />
        </button>
      </div>

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
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ChatArea;
