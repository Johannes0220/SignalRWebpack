import * as signalR from "@microsoft/signalr";
import "./css/main.css";

const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");


// create a connection
const connection = new signalR.HubConnectionBuilder().withUrl("/hub").build();


//create a method the server can call and display the message in the html
connection.on("messageReceived",(message:string)=>{
  const m = document.createElement("div");

  m.innerHTML=`<div class=author>Sever</div><div>${message}</div> `
  divMessages.appendChild(m);
  divMessages.scrollTop=divMessages.scrollHeight;
}
)

//Start the connection
connection.start().catch((err)=>document.write(err));



btnSend.addEventListener("click", send);

function send() {
  //Send a message to the server
  connection.send("startUpdates");
}
