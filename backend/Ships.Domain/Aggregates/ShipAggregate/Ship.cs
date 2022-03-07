using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Domain.Aggregates.ShipAggregate
{
    public class Ship
    {
        public ShipId Id { get; init; }
        public ShipName Name { get; init; }
        public ShipLength Length { get; init; }
        public ShipWidth Width { get; init; }
        public ShipCode Code { get; init; }

        Ship(ShipId id, ShipName name, ShipLength length, ShipWidth width, ShipCode code)
        {
            Id = id;
            Name = name;
            Length = length;
            Width = width;
            Code = code;
        }

        public static Ship FromPrimitive(IPrimitiveShip plainData) => new(
              ShipId.FromString(plainData.Id),
              ShipName.From(plainData.Name),
              ShipLength.From(plainData.Length),
              ShipWidth.From(plainData.Width),
              ShipCode.From(plainData.Code)
            );


        /**
        * At this moment we are creating only the instance but in future implementations we can create the event subscriptions
        * Example ShipCreatedDomainEvent
        **/
        public static Ship Create(ShipId id, ShipName name, ShipLength length, ShipWidth width, ShipCode code) => new(id, name, length, width, code);

        public PrimitiveShip ToPrimitives() {
            return new PrimitiveShip(Id.Value.ToString(),Name.Value,Length.Value,Width.Value,Code.Value);
            }
        }
}