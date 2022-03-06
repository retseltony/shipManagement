using MediatR;
using Microsoft.EntityFrameworkCore;
using Ships.Application.Commands;
using Ships.Application.Queries;
using Ships.Domain.Shared;
using Ships.Infrastructure.Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<ShipContext>( options => options.UseInMemoryDatabase("name=ShipsManagement"));
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
//commands
builder.Services.AddScoped<IShipCreator, ShipCreator>();
builder.Services.AddScoped<IShipUpgrader, ShipUpgrader>();
builder.Services.AddScoped<IShipDeletor, ShipDeletor>();
//queries
builder.Services.AddScoped<IShipsFinder, ShipsFinder>();
builder.Services.AddScoped<IShipFinder, ShipFinder>();
builder.Services.AddMediatR(typeof(GetAllShipsQuery).Assembly);

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
