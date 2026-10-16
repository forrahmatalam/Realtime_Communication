import app from "./app/app.js";
import {createServer} from "node:http";
import {initializeSocket} from "./sockets/socket.server.js";



//creating http server
const httpServer = createServer(app); //app krne se koi bhi http server se request aati hai to wo sidha app pr jati hai 

initializeSocket(httpServer);

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});







