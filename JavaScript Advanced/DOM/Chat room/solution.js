function solve() {
   const button = document.getElementById('send');
   button.addEventListener('click', send);

   function send() {
      const value = document.getElementById('chat_input');
      const parentDiv = document.getElementById('chat_messages');
      const div = document.createElement('div');
      div.className = 'message my-message';
      div.textContent = value.value;
      parentDiv.appendChild(div);

      value.value = '';
   }
}


