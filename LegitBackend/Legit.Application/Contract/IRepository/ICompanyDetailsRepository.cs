using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Legit.Domain.Models;

namespace Legit.Application.Contract.IRepository
{
    public interface ICompanyDetailsRepository
    {
        CompanyDetails GetComaponyDetails(string companyName);
    }
}