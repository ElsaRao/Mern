import express from 'express';
import path from 'path';
import http from 'http';
import {Server} from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const __dirname = path.resolve();

app.get('/', (req, res) => {
res.sendFile(__dirname + '/socket.html');
});

io.on('connection', (socket) => {
  
  let usersConnected = socket.client.conn.server.clientsCount;
  io.emit('users connected', usersConnected);
  console.log( `users connected: ${usersConnected}`);
    
  socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
  });
});

  
server.listen(3000, () => {
  console.log('listening on *:3000');
});