namespace Gijima.Data.DataModels;

public class BaseDataModel
{
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime ? UpdatedAt { get; set; }   
}