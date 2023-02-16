import { useParams } from "react-router-dom";
import socket from "../server/socket";
import ACTIONS from "../server/socket/actions";
const Room = () => {
  const { id: roomID } = useParams();

  socket.emit(ACTIONS.JOIN, {
    room: roomID,
  });
  return <div>Room</div>;
};

export default Room;
