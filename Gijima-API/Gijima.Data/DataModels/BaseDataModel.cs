using System.Text.Json.Serialization;

namespace Gijima.Data.DataModels;
using System.Text.Json.Serialization;

public class BaseDataModel
{
    [JsonPropertyName("id")]
    public int Id { get; set; }
    [JsonPropertyName("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    [JsonPropertyName("updated_at")]
    public DateTime ? UpdatedAt { get; set; }   
}