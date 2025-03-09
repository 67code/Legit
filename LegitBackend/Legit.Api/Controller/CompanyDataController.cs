using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using static Legit.Application.Query.Get.GetCompanyByNameQueryValidator;

namespace Legit.Api.Controller
{
    [ApiController]
    [Route("api/company-data")]
    public class CompanyDataController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CompanyDataController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{domainName}")]
        public async Task<IActionResult> GetCompanyData([FromRoute(Name = "domainName")] string domainName
)
        {
            var companyData = await _mediator.Send(new GetCompanyByNameQuery(domainName));
            return Ok(companyData);
        }
        
    }
}