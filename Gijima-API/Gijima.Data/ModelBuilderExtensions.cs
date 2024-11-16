using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Gijima.Data
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            string defaultDomain = "sonke.co.za";

            var firstNames = new List<string> 
            { 
                "Amahle", "Sihle", "Zandile", "Lihle", "Noluthando", "Sipho", "Thando", "Thembeka", "Anele", "Buhle" 
            };
            var lastNames = new List<string> { "Nkosi", "Mabena", "Zulu", "Ngcobo", "Mkhize", "Dlomo", "Ntuli", "Maduna", "Khumalo", "Ndlovu" };
            var hasher = new PasswordHasher<ApplicationUser>();
            var users = new List<ApplicationUser>();
            for (int i = 0; i < firstNames.Count; i++) 
            { 
                var roleName = $"{firstNames[i]}.{lastNames[i]}".ToLower();
                var user = new ApplicationUser { 
                    Id = (i + 1).ToString(),
                    UserName = firstNames[i] + "_" + lastNames[i], Email = $"{roleName}@{defaultDomain}".ToLower(),
                    NormalizedEmail = $"{roleName}@{defaultDomain}".ToUpper(),
                    EmailConfirmed = true,
                    FirstName = firstNames[i],
                    LastName = lastNames[i],
                    PasswordHash = hasher.HashPassword(null, "Test123!") 
                };
                users.Add(user); 
            }


            modelBuilder.Entity<ApplicationUser>().HasData(users.ToArray());
        }

    }
}
