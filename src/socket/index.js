import io from "socket.io-client";

export default io.connect("http://localhost:8000", { transports: ["websocket"] });