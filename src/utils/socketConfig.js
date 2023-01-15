import io from "socket.io-client";

const socket = io("https://web-production-a829.up.railway.app/");

// const socket = io("http://localhost:8000/");

export default socket;