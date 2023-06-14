"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signalR = require("@microsoft/signalr");
require("./css/main.css");
var divMessages = document.querySelector("#divMessages");
var tbMessage = document.querySelector("#tbMessage");
var btnSend = document.querySelector("#btnSend");
var username = "Dein Mudda";
// create a connection
var connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub/UpdateHub")
    .build();
//create a method the server can call and display the message in the html
connection.on("messageReceived", function (message) {
    var m = document.createElement("div");
    m.innerHTML = "<div class=\"message-author\">".concat(new Date(), "</div><div>").concat(message, "</div>");
    divMessages.appendChild(m);
    divMessages.scrollTop = divMessages.scrollHeight;
});
//Start the connections
connection.start().catch(function (err) { return document.write(err); });
tbMessage.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        send();
    }
});
btnSend.addEventListener("click", send);
function send() {
    //Send a message to the server
    //connection.send("startUpdates");
}
