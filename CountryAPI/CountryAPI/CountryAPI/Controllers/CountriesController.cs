#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CountryAPI;
using CountryAPI.Data;
using System.Net;
using System.Text.Json;

namespace CountryAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly DataContext _context;

        public CountriesController(DataContext context)
        {
            _context = context;
        }

        // GET: Countries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
        {
            return await _context.Countries.ToListAsync();
        }

        // GET: Country/api/DetailsIso/BR
        [HttpGet]
        [Route("api/DetailsIso/{iso}")]
        [Produces("application/json")]
        public IActionResult DetailsIso(string iso)
        {
            if (string.IsNullOrEmpty(iso))
            {
                return StatusCode(StatusCodes.Status404NotFound, "You did not send any Countrycode.");
                //return new { HttpStatusCode.NotFound, Message = "You did not send any Countrycode." };
            }
            var country = _context.Countries.Where(c => c.CountryCode == iso);

            if (country.GetEnumerator().MoveNext() == false)
            {
                return StatusCode(StatusCodes.Status404NotFound, "The CountryCode is incorrect");
            }

            return StatusCode(StatusCodes.Status200OK, country );
        }

        // GET: api/Countries/5
        [HttpGet("api/{id}")]
        public async Task<ActionResult<Country>> GetCountry(int id)
        {

            if (String.IsNullOrEmpty(id.ToString()))
            {
                return StatusCode(StatusCodes.Status404NotFound, "You did not send any Country.");
            }
            var country = await _context.Countries.FindAsync(id);

            if (country == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "The Country is incorrect");
            }

            return StatusCode(StatusCodes.Status200OK, country);
        }

        // POST: api/Countries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Country>> PostCountry(Country country)
        {
            _context.Countries.Add(country);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCountry", new { id = country.Id }, country);
        }
    }
}
