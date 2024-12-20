using Gijima.Data.DataModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Gijima.Data;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser, IdentityRole, string>
{
    private const string _schema = "gijima";

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public ApplicationDbContext()
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=postgres-db;Port=5432;Database=app;Username=admin;Password=admin;");
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.HasDefaultSchema(_schema);
        // modelBuilder.Seed();
         //modelBuilder.SeedAreas();
    }
    
    public DbSet<Job> Jobs { get; set; }
    public DbSet<Area> Area { get; set; }
    public DbSet<Offer> Offer { get; set; }
    public DbSet<Reviews> Review { get; set; }
}
