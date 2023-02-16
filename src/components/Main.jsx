import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../server/socket";
import ACTIONS from "../server/socket/actions";
import { v4 } from "uuid";

const Main = () => {
  const navigator = useNavigate();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      setRooms(rooms);
    });
  }, []);

  return (
    <>
      <ul>
        {rooms.map((roomID) => (
          <>
            <li key={roomID}>{roomID}</li>
            <button
              key={roomID}
              onClick={() => {
                navigator(`/room/${roomID}`);
              }}
            >
              Join room
            </button>
          </>
        ))}
      </ul>
      <button
        onClick={() => {
          navigator(`/room/${v4()}`);
        }}
      >
        Create new room
      </button>
    </>
  );
};

export default Main;
