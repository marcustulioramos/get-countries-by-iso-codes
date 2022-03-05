using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CountryAPI
{
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CountryCode { get; set; }
        public string Region { get; set; }
        public string CapitalCity { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}

