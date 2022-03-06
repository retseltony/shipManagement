using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Commands
{
    public interface IShipCreator
    {
        Task Run(ShipId id, ShipName name, ShipLength length, ShipWidth width, ShipCode code, CancellationToken cancellationToken);
    }
}