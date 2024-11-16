namespace Gijima.Data.DataModels;

public class Job : BaseDataModel
{
                public string UserId { get; set; }
                public ApplicationUser ?  User { get; set; }
                public string ? ProviderId { get; set; } 
                public ApplicationUser ? Provider { get; set; }
                public int AreaId { get; set; }
                public Area? Area { get; set; }
                public string Title { get; set; }
                public string ?  Description {get; set;} 
                public int Price {get; set;}
                public bool Active {get; set;}
}   