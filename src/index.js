"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/main.css");
var divMessages = document.querySelector("#divMessages");
var tbMessage = document.querySelector("#tbMessage");
var btnSend = document.querySelector("#btnSend");
var username = "My User";
//Create a connection object to the path specified in the packend
//create a method the server can call to send a message to the client.
//It should display the message sent in the divmessages element of index.hmtl
//Start the connection, !!!Advanced!!! use the connections ConnectionId to assign usernames to different clients
tbMessage.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        send();
    }
});
btnSend.addEventListener("click", send);
function send() {
    //Send your message using your server method
}
