import React, { useState } from "react";

import Intro from "./components/intro/Intro.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/login.jsx";
import MsgArea from "./components/Main/msgArea.jsx";

const App = () => {
  const [roomKey, setRoomKey] = useState("");
  const [display, setDisplay] = useState("intro");

  const components = {
    intro: <Intro setDisplay={setDisplay} />,
    login: <Login setRoomKey={setRoomKey} setDisplay={setDisplay} />,
    signup: <Signup setDisplay={setDisplay} setRoomKey={setRoomKey} />,
    msgarea: <MsgArea setDisplay={setDisplay} roomKey={roomKey} />,
  };

  return <>{components[display] || <div></div>}</>;
};

export default App;
