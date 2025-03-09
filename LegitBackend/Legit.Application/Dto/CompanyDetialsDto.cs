using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Legit.Application.Dto
{
    public class CompanyDetialsDto
    {
        public string CompanyName { get; set; }
        public string Location { get; set; }
        public long ActiveYears { get; set; }
        public decimal LegitScore { get; set; }
        public int ActiveUsers {get;set;}
        public string Description { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }

    }
}