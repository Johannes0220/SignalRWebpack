using SignalRWebpack.Hubs;
var builder = WebApplication.CreateBuilder(args);
//SignalR Hinzufügen
builder.Services.AddSignalR();

var app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();

app.MapHub<UpdateHub>("/hub");

app.Run();
