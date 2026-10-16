import { Server } from "socket.io";


export const initializeSocket = (httpServer)=>{

    const io = new Server(httpServer);
    
}