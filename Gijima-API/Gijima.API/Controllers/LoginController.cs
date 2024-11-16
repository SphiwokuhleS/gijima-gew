using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Gijima.Data;
using Gijima.Data.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Gijima.API.Controllers;

public class LoginController(ApplicationDbContext db, IConfiguration config, 
    UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager) : Controller
{
    private readonly ApplicationDbContext _db = db;
    private readonly IConfiguration _config = config;
    private readonly UserManager<ApplicationUser> _userManager = userManager;
    private readonly SignInManager<ApplicationUser> _signInManager = signInManager;
    
    [HttpPost]
    public async Task<IActionResult> PostLogin([FromBody] LoginModel login)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var users = _db.Users.ToList();

        var user = await _userManager.FindByEmailAsync(login.Username);

        if (user == null)
        {
            return Unauthorized();
        }

        var result = await _signInManager.CheckPasswordSignInAsync(user, login.Password, false);

        if (!result.Succeeded)
        {
            return Unauthorized();
        }

        var tokenString = await GenerateJsonWebToken(user);

        return Ok(new
        {
            accessToken = tokenString
        });
    }
    
    private async Task<string> GenerateJsonWebToken(ApplicationUser user)
    {

        var userRoles = await _userManager.GetRolesAsync(user);
        var authClaims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.Id),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };

        foreach (var userRole in userRoles)
        {
            authClaims.Add(new Claim(ClaimTypes.Role, userRole));
        }

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(_config["Jwt:Issuer"],
            _config["Jwt:Issuer"],
            authClaims,
            expires: DateTime.Now.AddDays(30),
            signingCredentials: credentials
        );



        return new JwtSecurityTokenHandler().WriteToken(token);
    }
    
}