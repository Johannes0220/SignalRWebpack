using SignalRWebpack.Hubs;
var builder = WebApplication.CreateBuilder(args);
//Add signalR to the services


var app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();

//Map the Hub class to a path

app.Run();
