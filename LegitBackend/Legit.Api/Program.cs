using System.IO;
using FluentValidation;
using Legit.Application.Contract.IRepository;
using Legit.Application.Contract.IService;
using Legit.Application.Extension;
using Legit.Infrastructure;
using Legit.Infrastructure.Repository;
using Legit.Infrastructure.Service;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using static Legit.Application.Query.Get.GetCompanyByNameQueryValidator;

var builder = WebApplication.CreateBuilder(args);
IConfiguration configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .Build();

// Add DbContext configuration here
builder.Services.AddDbContext<RepositoryContext>(options =>
    options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));
builder.Services.ConfigureHandlers();
// Register other services
builder.Services.AddScoped<ICompanyDetailsService, CompayDetailsService>();
builder.Services.AddScoped<ICompanyDetailsRepository,CompanyDetailsRepository>();

// Configure MediatR Handlers
builder.Services.AddValidatorsFromAssemblyContaining<GetCompanyByNameQuery>();

// Add controllers
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin() // Allow frontend requests
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});
var app = builder.Build();
app.UseCors("AllowAll"); // Enable CORS globally
app.MapControllers();
app.Run();
