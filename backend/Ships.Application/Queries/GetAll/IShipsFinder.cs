using Ships.Domain.Aggregates.ShipAggregate;

namespace Ships.Application.Queries
{
    public interface IShipsFinder
    {
        Task<IEnumerable<PrimitiveShip>> Run(CancellationToken cancellationToken = default);
    }
}