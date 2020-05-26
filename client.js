let websocket;
let  pseudo = prompt("Pseudo");

createWebSocket();

function createWebSocket() {
  websocket = new WebSocket('ws://localhost:12345');
  let b1 = document.querySelector('#chat-send');
  b1.addEventListener("submit", sendMessage);

  websocket.onmessage = function(event) {
    console.log(event.data);
    printMessage(event);
  }
}

function printMessage(event){
  let data = event.data;
  let tchat = document.getElementById("textAreaChat");
  let oldData = document.getElementById("textAreaChat").value;
  tchat.setAttribute("disabled", false);
  if (data != ""){
      if (oldData != ""){
          tchat.innerHTML = oldData + "\n" + data;
          document.getElementById("inlineFormInputGroup").value = "";
      }
      else {
          tchat.innerHTML = data;
          document.getElementById("inlineFormInputGroup").value = "";
      }
  }
}

function sendMessage(event) {
   event.preventDefault();
   let msg = pseudo + " : " + document.getElementById('inlineFormInputGroup').value;
   websocket.send(msg);
}