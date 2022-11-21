const io = require('socket.io')(3000)

const users = {}

io.on('connection', socket => {
    //CHAT FUNCTIONALITY
    socket.on('new-person', name =>{
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', message)
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
  //NOTE FUNCTIONALITY
  socket.on('send-notes', notes => {
    socket.broadcast.emit('add-notes', notes)
  })
  //note title 
  socket.on('note-title', title => {
    socket.broadcast.emit('add-notes-title', title)
  })
})
