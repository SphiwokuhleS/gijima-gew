using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Gijima.Data.Migrations
{
    /// <inheritdoc />
    public partial class SeedUserData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                schema: "gijima",
                table: "AspNetUsers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                schema: "gijima",
                table: "AspNetUsers",
                type: "text",
                nullable: true);

            migrationBuilder.InsertData(
                schema: "gijima",
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "1", 0, "9d4767d0-56f5-4a5d-be87-70a2be3aaaf1", "amahle.nkosi@sonke.co.za", true, "Amahle", "Nkosi", false, null, "AMAHLE.NKOSI@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEOCEFsD0F9AhPdZMQoUMVi85c54YHXUSrcjKE+Go47VLL+qKwYfZywpRQeVfNbCe9g==", null, false, "30a671ac-5f83-4072-831d-c040fb469b4b", false, "Amahle_Nkosi" },
                    { "10", 0, "a3b0d818-8184-4da6-9cab-a6353f3f92e4", "buhle.ndlovu@sonke.co.za", true, "Buhle", "Ndlovu", false, null, "BUHLE.NDLOVU@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEDuSNW3uHSKsV2QlM/pEvGCtw7EgKHgqIxhWIASHFFZwZjW11+BTgrH+UEVdLrqoCA==", null, false, "f58c3e26-caf1-485a-9d14-0e01f6451a2f", false, "Buhle_Ndlovu" },
                    { "2", 0, "e2a70673-687c-4006-9bf0-fb3a07732ce4", "sihle.mabena@sonke.co.za", true, "Sihle", "Mabena", false, null, "SIHLE.MABENA@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEMbDZj+gT8YST+j8JFY+7S2+L+T/qp/wWkyyU1B2/e4NvsS30NvSyfhO0NgUQrzs+Q==", null, false, "b74fca1a-3c7f-4318-a5a6-056dd3ce0c6c", false, "Sihle_Mabena" },
                    { "3", 0, "11d2184d-b740-4b07-95a5-93961faeb75b", "zandile.zulu@sonke.co.za", true, "Zandile", "Zulu", false, null, "ZANDILE.ZULU@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEBPoloabdJuX2tRW0ESo5W7wmDy1cyFl6ECpYVcHQN5m8wxLVFcqXuhTdTnq++NvrA==", null, false, "f0e50cac-9b2c-4378-9de7-4a6a9ffdd2bf", false, "Zandile_Zulu" },
                    { "4", 0, "ddced065-c83c-4ffb-9e91-7bf5c344c915", "lihle.ngcobo@sonke.co.za", true, "Lihle", "Ngcobo", false, null, "LIHLE.NGCOBO@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEOvl5uIOzUiybKh3upPKNbum+iUGmdsDoyAP7exSMr09zcxN3MizuySONJr3oLmlVA==", null, false, "1462c9fb-6c6e-4abf-bf6f-a01745e78526", false, "Lihle_Ngcobo" },
                    { "5", 0, "334b2e9a-867d-4406-8eb7-05308254b9f8", "noluthando.mkhize@sonke.co.za", true, "Noluthando", "Mkhize", false, null, "NOLUTHANDO.MKHIZE@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEOyvs1r/N6D8zAIVNRnsoyKSdGYMrj2sIjTSw1/yXTCElgtQkA9dl4oCtbxOq+5+zg==", null, false, "1d08c43d-3179-4d92-998b-02bdcc0724a0", false, "Noluthando_Mkhize" },
                    { "6", 0, "7b859464-57c3-4c13-adc9-1018ade33d03", "sipho.dlomo@sonke.co.za", true, "Sipho", "Dlomo", false, null, "SIPHO.DLOMO@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEGZGfP3HUWNK6jNvZlFF1EQJXfp6wgVNCrNtnhf5P6K4wHGVUo6RO45RlItDFLbVHg==", null, false, "accfb287-971a-4a48-8e1f-4a35d2f611bb", false, "Sipho_Dlomo" },
                    { "7", 0, "2cf0b1f2-bf32-4075-9422-57740485c76c", "thando.ntuli@sonke.co.za", true, "Thando", "Ntuli", false, null, "THANDO.NTULI@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEIhzPW/1EZBpxXRKoJBA8qSvM9DzWClzXWI1UcNJ41NOYtF9zWzZc1IF+jbISJbiOw==", null, false, "fbf7c31b-9c32-4c19-b510-f49d9aacf309", false, "Thando_Ntuli" },
                    { "8", 0, "cca8d1a9-b89f-4a54-a2fd-7abc0c2df53f", "thembeka.maduna@sonke.co.za", true, "Thembeka", "Maduna", false, null, "THEMBEKA.MADUNA@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEDp9kdb5UqsVjvAczstROIsiG25ewSqK6wL9CLa7LP0xerwpXvp7CEuciublDZo1tg==", null, false, "05281513-88a5-498c-b358-36a32d338dbb", false, "Thembeka_Maduna" },
                    { "9", 0, "42f4164f-e473-4024-8310-97dc2504a6d4", "anele.khumalo@sonke.co.za", true, "Anele", "Khumalo", false, null, "ANELE.KHUMALO@SONKE.CO.ZA", null, "AQAAAAIAAYagAAAAEC+19HTTVblAAatApR1fQx29OP6bLZfptmVWbuCZB/4zPCVadWQX0LqemeX5CfSx0A==", null, false, "6dc94e96-33be-4ade-82bb-f78655594677", false, "Anele_Khumalo" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "7");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8");

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9");

            migrationBuilder.DropColumn(
                name: "FirstName",
                schema: "gijima",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                schema: "gijima",
                table: "AspNetUsers");
        }
    }
}
