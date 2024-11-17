using System.Text.Json.Serialization;

namespace Gijima.Data.DataModels;

public class Offer : BaseDataModel
{
    [JsonPropertyName("user_id")]
    public string? UserId { get; set; }
    public ApplicationUser? User { get; set; }
    [JsonPropertyName("job_id")]
    public int? JobId { get; set; }
    public Job? Job { get; set; }
    public int? Price { get; set; } = 0;
    public bool Accepted { get; set; } = false;
    public string? Note { get; set; }
}