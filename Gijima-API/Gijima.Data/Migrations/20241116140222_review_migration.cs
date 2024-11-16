using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Gijima.Data.Migrations
{
    /// <inheritdoc />
    public partial class review_migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Review",
                schema: "gijima",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Rating = table.Column<float>(type: "real", nullable: false),
                    GivenByUserId = table.Column<string>(type: "text", nullable: true),
                    ReceivedByUserId = table.Column<string>(type: "text", nullable: true),
                    Comment = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Review", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Review_AspNetUsers_GivenByUserId",
                        column: x => x.GivenByUserId,
                        principalSchema: "gijima",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Review_AspNetUsers_ReceivedByUserId",
                        column: x => x.ReceivedByUserId,
                        principalSchema: "gijima",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Review_GivenByUserId",
                schema: "gijima",
                table: "Review",
                column: "GivenByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Review_ReceivedByUserId",
                schema: "gijima",
                table: "Review",
                column: "ReceivedByUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Review",
                schema: "gijima");
        }
    }
}
