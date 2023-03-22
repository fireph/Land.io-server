import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: '*',
  }
});

io.on("connection", (socket) => {
  // send a message to the client
  socket.emit("message", "CONNECTED");

  // receive a message from the client
  socket.on("message", (...args) => {
    console.log(args)
  });
});
