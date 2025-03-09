
using Legit.Domain.Models;

namespace Legit.Application.Contract.IService
{
    public interface ICompanyDetailsService
    {
        CompanyDetails GetComaponyDetails(string companyName);
    }
}