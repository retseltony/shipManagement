using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Commands
{
    public interface IShipDeletor
    {
        void Run(ShipId id, CancellationToken cancellationToken);
    }
}