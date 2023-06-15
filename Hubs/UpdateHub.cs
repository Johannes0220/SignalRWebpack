using Microsoft.AspNetCore.SignalR;

namespace SignalRWebpack.Hubs;

public class UpdateHub : Hub
{
    //Implement a update Method which repeatedly sends messages
    public async Task startUpdates(){
        var message="";
        for (int i = 1; i <11 ;i++)      {
            message="message "+i;
            await Clients.Caller.SendAsync("messageReceived",message);
            Thread.Sleep(1000);
        }
    }
}
