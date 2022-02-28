using Ships.Domain.ValueObjects;

namespace Ships.Domain.Aggregates.ShipAggregate
{
    public interface IPrimitiveShip
    {
        string Id { get; init; }
        string Name { get; init; }
        double Length { get; init; }
        double Width { get; init; }
        string Code { get; init; }
    }
}