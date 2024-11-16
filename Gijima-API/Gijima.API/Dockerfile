FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copy Gijima.API and Gijima.Data project files
COPY ["Gijima.API/Gijima.API.csproj", "Gijima.API/"]
COPY ["../Gijima.Data/Gijima.Data.csproj", "Gijima.Data/"]

# Restore dependencies
RUN dotnet restore "Gijima.API/Gijima.API.csproj"

# Copy all files
COPY . .
WORKDIR "/src/Gijima.API"

# Build the project
RUN dotnet build "Gijima.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Gijima.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Gijima.API.dll"]
