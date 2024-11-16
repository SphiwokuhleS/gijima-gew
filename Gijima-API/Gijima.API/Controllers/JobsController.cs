using Gijima.Data;
using Gijima.Data.DataModels;
using Gijima.Data.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gijima.API.Controllers;

public class JobsController(ApplicationDbContext db) : Controller
{
    private readonly ApplicationDbContext _db = db;

    #region CRUD
    public async Task<List<Job>> GetAll()
    {
        return await _db.Jobs.ToListAsync();
    }

    public async Task<Job> GetById(int id)
    {
        var job = await _db.Jobs.FindAsync(id);

        if (job == null)
            throw new KeyNotFoundException($"Job with ID {id} was not found.");
        
        return job;
    }

    [HttpPost]
    public async Task<JsonResult> Create(Job job)
    {
        var result = new JsonResultVm
        {
            Success = false
        };

        if (!ModelState.IsValid) return Json(result);
        
        _db.Jobs.Add(job);
        await _db.SaveChangesAsync();
            
        result.Success = true;

        return Json(result);
    }

    [HttpPost]
    public async Task<JsonResult> Update(Job job)
    {
        var result = new JsonResultVm
        {
            Success = false
        };

        if (!ModelState.IsValid) return Json(result);
        
        _db.Jobs.Update(job);
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
        
        var job = await _db.Jobs.FindAsync(id);
        
        if (job == null)
            throw new KeyNotFoundException($"Job with ID {id} was not found.");
        
        _db.Jobs.Remove(job);
        await _db.SaveChangesAsync();

        result.Success = true;
        
        return Json(result);
    }

    #endregion
}