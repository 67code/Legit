using LegitModule.Application.Command.Create;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Legit.Application.Extension;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
services.ConfigureHandlers();
services.AddControllers();
var app = builder.Build();
app.MapGet("/", () => "Hello World!");
app.MapControllers();
app.Run();
