using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using LegitModule.Application.Command.Create;
using Microsoft.Extensions.DependencyInjection;

namespace Legit.Application.Extension
{
    public static class ServiceExtension
    {


        public static void ConfigureHandlers(this IServiceCollection services)
{

            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
            services.AddTransient<CreateUserCommandHandler>();  
        }

    }
}