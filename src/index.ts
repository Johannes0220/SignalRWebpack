import * as signalR from "@microsoft/signalr";
import "./css/main.css";

const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");
let username = "My User"

//Create a connection object to the path specified in the packend
 
//create a method the server can call to send a message to the client.
//It should display the message sent in the divmessages element of index.hmtl

//Start the connection, !!!Advanced!!! use the connections ConnectionId to assign usernames to different clients


tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    send();
  }
});

btnSend.addEventListener("click", send);

function send() {
  //Send your message using your server method

}
