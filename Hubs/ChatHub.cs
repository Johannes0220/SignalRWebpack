using Microsoft.AspNetCore.SignalR;

namespace SignalRWebpack.Hubs;

public class ChatHub :Hub
{
    //Make this class a hub and implement a method the clients can call, it should send the message to all Clients
    public async Task NewMessage(string username, string message)
    {
        
        await Clients.All.SendAsync("messageReceived", username, message);
    }
}