"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signalR = require("@microsoft/signalr");
require("./css/main.css");
var divMessages = document.querySelector("#divMessages");
var btnSend = document.querySelector("#btnSend");
// create a connection
var connection = new signalR.HubConnectionBuilder().withUrl("/hub").build();
//create a method the server can call and display the message in the html
connection.on("messageReceived", function (message) {
    var m = document.createElement("div");
    m.innerHTML = "<div class=author>Sever</div><div>".concat(message, "</div> ");
    divMessages.appendChild(m);
    divMessages.scrollTop = divMessages.scrollHeight;
});
//Start the connection
connection.start().catch(function (err) { return document.write(err); });
btnSend.addEventListener("click", send);
function send() {
    //Send a message to the server
    connection.send("startUpdates");
}
