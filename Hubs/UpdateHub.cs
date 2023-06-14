using Microsoft.AspNetCore.SignalR;

namespace SignalRWebpack.Hubs;

public class UpdateHub : Hub
{
    public async Task startUpdates()
    {
        var message = "";
        for (int i = 0; i < 11; i++)
        {
            message = "Message " + i;
            await Clients.All.SendAsync("messageReceived", message);
            Thread.Sleep(1000);

        }
    }
}
