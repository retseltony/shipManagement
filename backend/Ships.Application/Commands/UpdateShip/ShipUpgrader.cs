using System;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Shared;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Commands
{
    public class ShipUpgrader : IShipUpgrader
    {
        private IUnitOfWork UnitOfWork { get; init; }

        public ShipUpgrader(IUnitOfWork unitOfWork)
        {
            UnitOfWork = unitOfWork;
        }

        public Task Run(ShipId id, ShipName name, ShipLength length, ShipWidth width, ShipCode code, CancellationToken cancellationToken)
        {
            Ship ship = Ship.Create(id, name, length, width, code);
            UnitOfWork.Ships.Update(ship, cancellationToken);
            return Task.CompletedTask;
        }
    }
}

