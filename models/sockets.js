class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }
  socketEvents() {
    this.io.on('connection', (socket) => {
      socket.on('message-to-server', (data) => {
        console.log(data);
        this.io.emit('message-from-server', data);
      });

      socket.emit('welcome-message', {
        message: 'Welcome!',
        date: new Date(),
      });
    });
  }
}

module.exports = Sockets;
