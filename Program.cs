using SignalRWebpack.Hubs;
var builder = WebApplication.CreateBuilder(args);
//Add SignalR to Services
builder.Services.AddSignalR();

var app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();

//register hub with URL
app.MapHub<UpdateHub>("/hub");

app.Run();
