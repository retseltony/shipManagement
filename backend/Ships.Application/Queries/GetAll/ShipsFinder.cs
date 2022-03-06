using System;
using AutoMapper;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Shared;

namespace Ships.Application.Queries
{
    public class ShipsFinder : IShipsFinder
    {
        private IUnitOfWork UnitOfWork { get; init; }

        public ShipsFinder(IUnitOfWork unitOfWork)
        {
            UnitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<PrimitiveShip>> Run(CancellationToken cancellationToken = default)
        {

            var ships = await UnitOfWork.Ships.List(cancellationToken);
            return ships.Select(ship => ship.ToPrimitives());
        }
    }
}

