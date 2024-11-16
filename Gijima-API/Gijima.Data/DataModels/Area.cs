namespace Gijima.Data.DataModels;

public class Area : BaseDataModel
{
    public string ? UserId { get; set; }
    public ApplicationUser ?  User { get; set; }
    public int?  JobId { get; set; }
    public Job ? Job { get; set; }
    public string ? Name { get; set; }
    public string ?  Address1 { get; set; }
    public string ? Address2 { get; set; }
    public int ? Postcode { get; set; }
}