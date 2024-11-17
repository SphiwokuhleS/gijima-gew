namespace Gijima.Data.DataModels;
using System.Text.Json.Serialization;
public class Reviews : BaseDataModel
{
    [JsonPropertyName("rating")]
    public float Rating { get; set; }
    [JsonPropertyName("given_by_user_id")]
    public string? GivenByUserId { get; set; }
    public ApplicationUser? GivenByUser { get; set; }
    [JsonPropertyName("received_by_user_id")]
    public string? ReceivedByUserId { get; set; }
    public ApplicationUser? ReceivedByUser { get; set; }
    [JsonPropertyName("comment")]
    public string? Comment { get; set; }
}