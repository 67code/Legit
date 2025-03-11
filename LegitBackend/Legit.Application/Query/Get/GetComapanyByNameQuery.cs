using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using Legit.Application.Contract.IService;
using Legit.Application.Dto;
using Legit.Domain.Models;
using MediatR;
using static Legit.Application.Query.Get.GetCompanyByNameQueryValidator;

namespace Legit.Application.Query.Get
{
    public class GetCompanyByNameQueryValidator : AbstractValidator<GetCompanyByNameQuery>
    {
        public GetCompanyByNameQueryValidator()
        {
            RuleFor(x => x.domainName)
                .NotEmpty().WithMessage("Comapny name id is required.")
                .NotNull();
        }

        public record GetCompanyByNameQuery(string domainName) : IRequest<CompanyDetialsDto>;
        public class GetCompanyByNameQueryHandler : IRequestHandler<GetCompanyByNameQuery, CompanyDetialsDto>
        {
            private readonly ICompanyDetailsService _companDetailsService;


            public GetCompanyByNameQueryHandler(ICompanyDetailsService companyDetailsService)

            {
                _companDetailsService = companyDetailsService;
            }

            public Task<CompanyDetialsDto> Handle(GetCompanyByNameQuery request, CancellationToken cancellationToken)
            {

                string domainName = request.domainName;
                CompanyDetails company = _companDetailsService.GetComaponyDetails(domainName);
                CompanyDetialsDto companyDetialsDto = new CompanyDetialsDto()
                {
                    CompanyName = company.CompanyName,
                    Location = company.Location,
                    Email = company.Email,
                    Website = company.Website,
                    ActiveYears = company.ActiveYears,
                    ActiveUsers = company.ActiveUsers,
                    Description = company.Description,
                    LegitScore = 5,
                    Category =company.Category

                };
                return Task.FromResult(companyDetialsDto);
            }


        }
    }
}