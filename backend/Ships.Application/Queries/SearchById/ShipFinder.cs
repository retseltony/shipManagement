using System;
using AutoMapper;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;
using Ships.Domain.Exceptions;
using Ships.Domain.Shared;

namespace Ships.Application.Queries
{
    public class ShipFinder : IShipFinder
    {
        private IUnitOfWork UnitOfWork { get; init; }

        public ShipFinder(IUnitOfWork unitOfWork)
        {
            UnitOfWork = unitOfWork;
        }

        public async Task<PrimitiveShip> Run(ShipId id, CancellationToken cancellationToken = default)
        {

            var ship = await UnitOfWork.Ships.SearchById(id, cancellationToken);
            return ship?.ToPrimitives() ?? throw new ShipNotFound();
        }
    }
}

