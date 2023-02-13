import React from "react";
import socket from "../server/socket";

const Main = () => {
  socket.connect({ autoConnect: true });
  return <div>Main</div>;
};

export default Main;
