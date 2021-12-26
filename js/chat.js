"use strict";

var connection = null;
function onSignalR(signalRReceived) {
    connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:7073/chatHub").build();

    connection.on("ReceiveMessage", function (user, message) {
        // Received
        console.log("received:", message);
        signalRReceived(user, message);
    });

    connection.start().then(function () {
        // 시작성공
        console.log("R-started");
    }).catch(function (err) {
        return console.error(err.toString());
    });
}




// //Disable the send button until connection is established.
// document.getElementById("sendButton").disabled = true;

// document.getElementById("sendButton").addEventListener("click", function (event) {
//     var user = document.getElementById("userInput").value;
//     var message = document.getElementById("messageInput").value;
//     connection.invoke("SendMessage", user, message).catch(function (err) {
//         return console.error(err.toString());
//     });
//     event.preventDefault();
// });