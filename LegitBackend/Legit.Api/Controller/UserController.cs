using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using System.Threading.Tasks;
using LegitModule.Application.Command.Create;
namespace Legit.Api.Controller
{
    

    [ApiController]
    [Route("api/webhook")]
    public class WebhookController : ControllerBase
    {
        private readonly IMediator _mediator;
     
        public WebhookController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("user-signup")]
        public async Task<IActionResult> UserSignup([FromBody] CreateUserCommand command)
        {
            var userId = await _mediator.Send(command);
            return Ok(new { Message = "User registered successfully!", UserId = userId });
            //
        }
    }
}