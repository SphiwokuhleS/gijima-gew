namespace Gijima.Data.DataModels;

public class Offer : BaseDataModel
{
    public string? UserId { get; set; }
    public ApplicationUser? User { get; set; }
    public int? JobId { get; set; }
    public Job? Job { get; set; }
    public int Price { get; set; } = 0;
    public bool Accepted { get; set; } = false;
    public string? Note { get; set; }
}