using SignalRWebpack.Hubs;
var builder = WebApplication.CreateBuilder(args);
//Add SignalR to Services


var app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();

//register hub with URL


app.Run();
