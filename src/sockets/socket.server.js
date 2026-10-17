import { Server } from "socket.io";


export const initializeSocket = (httpServer)=>{

    const io = new Server(httpServer);
   
    //server se event listen krne ke lie 
    io.on("connection", (socket) => {
        console.log("Socket connected", socket.id); //ye socket id connection ke lie hoti hai na ki user ke lie 

   socket.on("disconnect", () => {
        console.log("Socket disconnected", socket.id); //ye socket id connection ke lie hoti hai na ki user ke lie
    });

    //it is a custom event
      socket.on("elon",(msg)=>{
            console.log(msg);
            io.emit("musk","Hello server se hu via socket");
        });
});

};