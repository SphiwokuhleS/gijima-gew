using Gijima.Data;
using Gijima.Data.DataModels;
using Gijima.Data.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gijima.API.Controllers;

public class AreaController (ApplicationDbContext db) : Controller
{
    private readonly ApplicationDbContext _db = db;
    
    #region CRUD

    public async Task<List<Area>> GetAllAreas()
    {
        return await _db.Area.ToListAsync();
    }

    public async Task<Area> GetAreaById(int id)
    {
        var area = await _db.Area.FindAsync(id);

        if (area == null)
            throw new KeyNotFoundException($"Area with ID {id} was not found.");
        
        return area;
    }

    [HttpPost]
    public async Task<JsonResult> CreateArea(Area area)
    {
        var result = new JsonResultVm
        {
            Success = false
        };
        
        if (!ModelState.IsValid)
            return Json(result);
        
        _db.Area.Add(area);
        await _db.SaveChangesAsync();
        
        result.Success = true;
        
        return Json(result);
    }
    
    [HttpPost]
    public async Task<JsonResult> UpdateArea(Area area)
    {
        var result = new JsonResultVm
        {
            Success = false
        };

        if (!ModelState.IsValid) return Json(result);
        
        _db.Area.Update(area);
        await _db.SaveChangesAsync();
            
        result.Success = true;

        return Json(result);
    }

    [HttpPost]
    public async Task<JsonResult> DeleteJob(int id)
    {
        var result = new JsonResultVm
        {
            Success = false
        };
        
        var area = await _db.Area.FindAsync(id);
        
        if (area == null)
            throw new KeyNotFoundException($"Job with ID {id} was not found.");
        
        _db.Area.Remove(area);
        await _db.SaveChangesAsync();

        result.Success = true;
        
        return Json(result);
    }

    #endregion
}