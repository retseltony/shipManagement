using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Domain.Aggregates.ShipAggregate
{
    public interface IPrimitiveShip
    {
        string Id { get; set; }
        string Name { get; set; }
        double Length { get; set; }
        double Width { get; set; }
        string Code { get; set; }
    }
}