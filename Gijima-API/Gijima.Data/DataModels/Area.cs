using Microsoft.AspNetCore.SignalR;
using System.Text.Json.Serialization;
namespace Gijima.Data.DataModels;

public class Area : BaseDataModel
{
    [JsonPropertyName("user_id")]
    public string ? UserId { get; set; }
    public ApplicationUser ?  User { get; set; }
    [JsonPropertyName("name")]
    public string ? Name { get; set; }
    [JsonPropertyName("address_1")]
    public string ?  Address1 { get; set; }
    [JsonPropertyName("address_2")]
    public string ? Address2 { get; set; }
    [JsonPropertyName("post_code")]
    public int ? Postcode { get; set; }
}