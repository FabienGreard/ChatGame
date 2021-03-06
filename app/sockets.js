module.exports = (server) =>{

  const io = require('socket.io')(server);

  io.on("connection", socket => {
     console.log("New client connected");
     socket.emit('initialize', 'Chat is runing..');
     socket.on("chat message", (msg) => {
       console.log(`New message: ${msg}`);
       io.emit('chat message', msg);
     });
     socket.on("disconnect", () => {
       console.log("Client disconnected");
     });
   });

   return io;
};
