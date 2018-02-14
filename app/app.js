const socket = io(),
      messages = document.getElementById('messages'),
      form = document.getElementById('form'),
      message = document.getElementById('message');

form.onsubmit = () => {
  socket.emit('chat message', message.value)
  message.value = '';
  return false;
}

socket.on('chat message', (msg) => {
  let li = document.createElement("li");
  li.innerHTML = msg;
  messages.append(li);
});

socket.on('initialize', (msg) => {
  let li = document.createElement("li");
  li.innerHTML = msg;
  messages.append(li);
});
