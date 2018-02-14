const socket = io(),
      messages = document.getElementById('messages'),
      form = document.getElementById('form'),
      message = document.getElementById('message');

form.onsubmit = () => {
  socket.emit('chat message', message.value) // emit client
  message.value = '';
  return false;
}

const appendMessage = (msg) => {
  let li = document.createElement("li"); // create a li element
  li.innerHTML = msg; // set li InnerHTML
  messages.append(li); // add this element to ul
}

socket.on('chat message', (msg) => {
  appendMessage(msg);
});

socket.on('initialize', (msg) => {
  appendMessage(msg);
});
