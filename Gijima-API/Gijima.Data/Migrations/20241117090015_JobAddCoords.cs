using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gijima.Data.Migrations
{
    /// <inheritdoc />
    public partial class JobAddCoords : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                schema: "gijima",
                table: "Jobs",
                type: "double precision",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                schema: "gijima",
                table: "Jobs",
                type: "double precision",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                schema: "gijima",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "Longitude",
                schema: "gijima",
                table: "Jobs");
        }
    }
}
