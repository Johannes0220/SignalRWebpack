using SignalRWebpack.Hubs;
var builder = WebApplication.CreateBuilder(args);
//Add signalR to the services
builder.Services.AddSignalR();

var app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();

//Map the Hub class to a path
app.MapHub<ChatHub>("/hub");
app.Run();
