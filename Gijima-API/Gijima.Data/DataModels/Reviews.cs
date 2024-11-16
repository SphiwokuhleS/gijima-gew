namespace Gijima.Data.DataModels;

public class Reviews : BaseDataModel
{
    public float Rating { get; set; }
    public string? GivenByUserId { get; set; }
    public ApplicationUser? GivenByUser { get; set; }
    public string? ReceivedByUserId { get; set; }
    public ApplicationUser? ReceivedByUser { get; set; }
    public string? Comment { get; set; }
}