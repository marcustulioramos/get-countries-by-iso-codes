using api.Context;
using api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace api.Controllers
{
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CountryController : ApiController
    {
        CountryContext db = new CountryContext();

        // GET api/Country
        [Route("api/Country")]
        public IHttpActionResult Get()
        {
            List<Country> CountriesList = new List<Country>();

            var countries = db.Countries.ToList();

            if (countries == null)
            {
                return Json(new { HttpStatusCode.NotFound, Message = "There are no countries on our record." });
            }

            foreach (var c in countries)
            {
                CountriesList.Add(c);
            }
            return Json(new { HttpStatusCode.OK, CountriesList });

        }

        // GET: Country/api/DetailsIso/BR
        [HttpGet]
        [Route("api/Country/DetailsIso/{iso}")]
        public IHttpActionResult DetailsIso(string iso)
        {
            if (string.IsNullOrEmpty(iso))
            {
                return Json(new { HttpStatusCode.NotFound, Message = "You did not send any Countrycode." });
            }
            var country = db.Countries.Where(c => c.CountryCode == iso);

            if (country.GetEnumerator().MoveNext() == false)
            {
                return Json(new { HttpStatusCode.NotFound, Message = "The CountryCode is incorrect" });
            }

            return Json(new { HttpStatusCode.OK, country });
        }

        // GET: Country/Details/5
        [HttpGet]
        [Route("api/Country/Details/{id}")]
        public IHttpActionResult Details(int id)
        {
            if (String.IsNullOrEmpty(id.ToString()))
            {
                return Json(new { HttpStatusCode.NotFound, Message = "You did not send any Country." });
            }
            var country = db.Countries.Where(c => c.Id == id);

            if (country.GetEnumerator().MoveNext() == false)
            {
                return Json(new { HttpStatusCode.NotFound, Message = "The Country is incorrect" });
            }

            return Json(new { HttpStatusCode.OK, country });
        }

        // POST api/Country/Store
        [HttpPost]
        [Route("api/Country/Store")]
        public IHttpActionResult Store([FromBody] Country country)
        {
            if (ModelState.IsValid)
            {
                db.Countries.Add(country);
                db.SaveChanges();
                return Ok(db.Countries.ToList());
            }

            return Json(new { HttpStatusCode.BadRequest, Message = "The Country is incorrect" });
        }
    }
}

