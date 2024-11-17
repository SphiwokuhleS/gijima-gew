namespace Gijima.Data.DataModels;
using System.Text.Json.Serialization;

public class Job : BaseDataModel
{
                [JsonPropertyName("user_id")]
                public string UserId { get; set; }
                public ApplicationUser ?  User { get; set; }
                [JsonPropertyName("provider_id")]
                public string ? ProviderId { get; set; } 
                public ApplicationUser ? Provider { get; set; }
                [JsonPropertyName("area_id")]
                public int AreaId { get; set; }
                public Area? Area { get; set; }
                [JsonPropertyName("title")]
                public string Title { get; set; }
                [JsonPropertyName("description")]
                public string ?  Description {get; set;}
                [JsonPropertyName("price")]
                public int Price {get; set;}
                [JsonPropertyName("active")]
                public bool Active {get; set;}
}   