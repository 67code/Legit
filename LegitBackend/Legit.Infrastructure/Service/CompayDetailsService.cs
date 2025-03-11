using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Legit.Application.Contract.IRepository;
using Legit.Application.Contract.IService;
using Legit.Application.Dto;
using Legit.Domain.Models;
using Legit.Infrastructure.Repository;

namespace Legit.Infrastructure.Service
{
    public class CompayDetailsService : ICompanyDetailsService
    {
        private readonly ICompanyDetailsRepository _companyDetailsRepository;

        public CompayDetailsService(ICompanyDetailsRepository companyDetailsRepository)
        {

            _companyDetailsRepository = companyDetailsRepository;
        }


        public CompanyDetails GetComaponyDetails(string domainName)
        {

            CompanyDetails res = _companyDetailsRepository.GetComaponyDetails(domainName);
            return res;

        }
    }
}