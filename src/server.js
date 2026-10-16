import app from "./app/app.js";
import {createServer} from "node:http";
import { Server } from "socket.io";


//creating http server
const httpServer = createServer(app); //app krne se koi bhi http server se request aati hai to wo sidha app pr jati hai 

// socket io http server
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("User connected");
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});