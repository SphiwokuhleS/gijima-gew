using Gijima.Data;
using Gijima.Data.DataModels;
using Gijima.Data.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gijima.API.Controllers;

public class OffersController (ApplicationDbContext db) : Controller
{
    private readonly ApplicationDbContext _db = db;
    
    #region CRUD

    public async Task<List<Offer>> GetAll()
    {
        return await _db.Offer.ToListAsync();
    }

    public async Task<Offer> GetById(int id)
    {
        var offer = await _db.Offer.FindAsync(id);

        if (offer == null)
            throw new KeyNotFoundException($"Offer with ID {id} was not found.");
        
        return offer;
    }

    [HttpPost]
    public async Task<JsonResult> Create([FromBody]Offer offer)
    {
        var result = new JsonResultVm
        {
            Success = false
        };
        
        if (!ModelState.IsValid)
            return Json(result);
        
        _db.Offer.Add(offer);
        await _db.SaveChangesAsync();
        
        result.Success = true;
        
        return Json(result);
    }
    
    [HttpPost]
    public async Task<JsonResult> Update([FromBody]Offer offer)
    {
        var result = new JsonResultVm
        {
            Success = false
        };

        if (!ModelState.IsValid) return Json(result);
        
        _db.Offer.Update(offer);
        await _db.SaveChangesAsync();
            
        result.Success = true;

        return Json(result);
    }

    [HttpPost]
    public async Task<JsonResult> Delete(int id)
    {
        var result = new JsonResultVm
        {
            Success = false
        };
        
        var offer = await _db.Offer.FindAsync(id);
        
        if (offer == null)
            throw new KeyNotFoundException($"Offer with ID {id} was not found.");
        
        _db.Offer.Remove(offer);
        await _db.SaveChangesAsync();

        result.Success = true;

        return Json(result);
    }

    #endregion

    [HttpPost]
    public async Task<JsonResult> SetOfferToAccepted(int id)
    {
        var result = new JsonResultVm
        {
            Success = false
        };
        
        var offer = await _db.Offer.FindAsync(id);

        if (offer == null)
        {
            result.Error = "Offer with ID " + id + " was not found.";
            
            return Json(result);
        }
        
        offer.Accepted = true;
        
        _db.Offer.Update(offer);
        await _db.SaveChangesAsync();
        
        var job = await _db.Jobs.FindAsync(offer.JobId);

        if (job == null)
        {
            result.Message = "Could not find job";
            return Json(result);
        }

        job.ProviderId = offer.UserId;
        
        _db.Jobs.Update(job);
        await _db.SaveChangesAsync();

        result.Success = true;
        
        return Json(result);
    }

}