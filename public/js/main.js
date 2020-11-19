const chatForm = document.getElementById('chat-form');
const socket = io();

//Message from server
socket.on('message', (message) => {
  outputMessage(message);
  console.log(message);
});

//Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //Get message text
  const msg = e.target.elements.msg.value;

  //Emiting a message to the server
  socket.emit('chatMessage', msg);
});

//Output message to DOM

function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta"></p><p class="text">${message}</p>`;
  document.querySelector('.chat-messages').appendChild(div);
}
