# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY *.sln .
COPY ["Ships.API/Ships.API.csproj", "Ships.API/"]
COPY ["Ships.Application/Ships.Application.csproj", "Ships.Application/"]
COPY ["Ships.Domain/Ships.Domain.csproj", "Ships.Domain/"]
COPY ["Ships.Infrastructure/Ships.Infrastructure.csproj", "Ships.Infrastructure/"]
RUN dotnet restore

# copy everything else and build app
COPY Ships.API/. ./Ships.API/
WORKDIR /source/Ships.API
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
ENV ASPNETCORE_URLS=https://+:5001;http://+:5000
WORKDIR /app
EXPOSE 5000
EXPOSE 5001
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "Ships.API.dll"]