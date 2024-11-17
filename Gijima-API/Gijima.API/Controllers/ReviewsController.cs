using Gijima.Data;
using Gijima.Data.DataModels;
using Gijima.Data.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gijima.API.Controllers;

public class ReviewsController(ApplicationDbContext db) : Controller
{
    
    private readonly ApplicationDbContext _db = db;
    
    #region CRUD

    public async Task<List<Reviews>> GetAll()
    {
        return await _db.Review.ToListAsync();
    }

    public async Task<Reviews> GetById(int id)
    {
        var review = await _db.Review.FindAsync(id);

        if (review == null)
            throw new KeyNotFoundException($"Offer with ID {id} was not found.");
        
        return review;
    }

    [HttpPost]
    public async Task<JsonResult> Create([FromBody]Reviews review)
    {
        var result = new JsonResultVm
        {
            Success = false
        };
        
        if (!ModelState.IsValid)
            return Json(result);
        
        _db.Review.Add(review);
        await _db.SaveChangesAsync();
        
        result.Success = true;
        
        return Json(result);
    }
    
    [HttpPost]
    public async Task<JsonResult> Update([FromBody]Reviews review)
    {
        var result = new JsonResultVm
        {
            Success = false
        };

        if (!ModelState.IsValid) return Json(result);
        
        _db.Review.Update(review);
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
        
        var reviews = await _db.Review.FindAsync(id);
        
        if (reviews == null)
            throw new KeyNotFoundException($"Reviews with ID {id} was not found.");
        
        _db.Review.Remove(reviews);
        await _db.SaveChangesAsync();

        result.Success = true;

        return Json(result);
    }

    #endregion
    
}