using System;
namespace Legit.Domain.Models;
public class CompanyDetails
{
    public long  Id { get; set; }
    public string Name { get; set; }
    public string Location { get; set; }
    public string Email { get; set; }
    public string Website { get; set; }
    public long ActiveYears { get; set; }
    public int ActiveUsers { get; set; }
    public bool IsActive { get; set; }
    public string Description { get; set; }


}