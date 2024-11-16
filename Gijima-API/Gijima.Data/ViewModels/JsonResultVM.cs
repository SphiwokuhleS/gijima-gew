namespace Gijima.Data.ViewModels;

public class JsonResultVm
{
    public bool Success { get; set; } = false;
    public string? Message { get; set; }
    public string? Error { get; set; }
}