using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Domain.Aggregates.ShipAggregate
{
    public interface IShipRepository : IRepository<Ship>
    {
        Task<Ship?> SearchById(ShipId id, CancellationToken cancellationToken);
    }
}

