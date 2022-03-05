using api.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace api.Context
{
    public class CountryContext : DbContext
    {
        public DbSet<Country> Countries { get; set; }
    }
}