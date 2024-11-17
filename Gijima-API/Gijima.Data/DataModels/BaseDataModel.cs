using System.Text.Json.Serialization;

namespace Gijima.Data.DataModels;

public class BaseDataModel
{
    public int Id { get; set; }
    [JsonPropertyName("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime ? UpdatedAt { get; set; }   
}