using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace Gijima.Data;

public class ApplicationUser : IdentityUser
{
    [JsonPropertyName("first_name")]
    public string? FirstName { get; set; }
    [JsonPropertyName("last_name")]
    public string? LastName { get; set; }
    [JsonPropertyName("stars")]
    public string? Star { get; set; }
}