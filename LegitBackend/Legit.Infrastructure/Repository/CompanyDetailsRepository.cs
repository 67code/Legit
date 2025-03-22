using System;
using System.Collections.Generic;
using System.Linq;
using Legit.Application.Contract.IRepository;
using Legit.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Legit.Infrastructure.Repository
{
    public class CompanyDetailsRepository:ICompanyDetailsRepository
    {
        private readonly RepositoryContext _context;
        public  CompanyDetailsRepository(RepositoryContext context)
        {
        _context = context;
        }
        public CompanyDetails GetComaponyDetails(string domainName)
        {
        
            var result = _context.CompanyDetails.Select(X => X).FirstOrDefault(x => x.DomainName == domainName);
            return result;
            
        }
        
    }
}