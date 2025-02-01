using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Legit.Application.Dto;
using MediatR;

namespace LegitModule.Application.Command.Create
{
    
    public record CreateUserCommand(UserDto UserDetails) : IRequest<long>;

    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, long>
    {
        public Task<long> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
        return Task.FromResult(1000L);
        }
    }
}
