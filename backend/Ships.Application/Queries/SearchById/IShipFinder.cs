using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Queries
{
    public interface IShipFinder
    {
        Task<PrimitiveShip> Run(ShipId id, CancellationToken cancellationToken = default);
    }
}