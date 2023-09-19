const express = require('express');
const SocketIo = require('socket.io');
const http = require('http');

const PORT = 8080
const app = express();
const server = http.createServer(app);
const io = SocketIo(server, {
  cors: {
    origin: 'http://localhost:5173',
    method: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('New connection')

  socket.emit('welcome', { message: 'Welcome to the server', user: 'Server' })

  socket.on('message', (data) => {
    //console.log('MESSAGE EVENT:', data)
    io.emit('broadcast', data)
  })

  socket.on('join room', () => {
    console.log('JOIN ROOM EVENT')
    socket.join('some room')
  })

  socket.on('msgPrivate', (data) => {
    io.to('some room').emit('private', data)
  })

})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})