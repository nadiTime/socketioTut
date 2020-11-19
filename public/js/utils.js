export default class utils {
  outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta"></p><p class="text">${message}</p>`;
    document.querySelector('.chat-messages').appendChild(div);
  }
}
