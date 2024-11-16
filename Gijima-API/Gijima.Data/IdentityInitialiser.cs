using Microsoft.AspNetCore.Identity;

namespace Gijima.Data;

public class IdentityInitialiser
{
    private readonly string defaultPassword = "Test123";
    readonly string defaultDomain = "sonke.co.za";
        private RoleManager<IdentityRole> _roleManager;
        private UserManager<ApplicationUser> _userManager;
        private ApplicationDbContext _db;

        public IdentityInitialiser(RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager, ApplicationDbContext db)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _db = db;
        }
        

		private async Task AddUser()
        {

            if (_db.Users.Count() != 0)
            {
                return;
            }

            var defaultDomain = "example.com";
            
            var firstNames = new List<string>
            {
                "Amahle", "Sihle", "Zandile", "Lihle", "Noluthando",
                "Sipho", "Thando", "Thembeka", "Anele", "Buhle"
            };

            var lastNames = new List<string>
            {
                "Nkosi", "Mabena", "Zulu", "Ngcobo", "Mkhize",
                "Dlomo", "Ntuli", "Maduna", "Khumalo", "Ndlovu"
            };

            for (int i = 0; i < firstNames.Count; i++)
            {
                var roleName = $"{firstNames[i]}.{lastNames[i]}".ToLower();
                var user = new ApplicationUser
                {
                    UserName = firstNames[i] + "_" + lastNames[i],
                    Email = $"{roleName}@{defaultDomain}".ToLower(),
                    NormalizedEmail = $"{roleName}@{defaultDomain}".ToUpper(),
                    EmailConfirmed = true,
                    FirstName = firstNames[i],
                    LastName = lastNames[i]
                };
                
                var result = await _userManager.CreateAsync(user, defaultPassword);
            }
        }
    }
    
