using Ships.Domain.ValueObjects;

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
        * At this moment we are creating only the instance but in future implementations we can create the events supscriptions
        * Example ShipCreatedDomainEvent
        **/
        public static Ship Create(ShipId id, ShipName name, ShipLength length, ShipWidth width, ShipCode code) => new(id, name, length, width, code);

        public PrimitiveShip ToPrimitives() {
            return new PrimitiveShip(Id.Value.ToString(),Name.Value,Length.Value,Width.Value,Code.Value);
            }
        }
}


/*
 name (string), length (in metres), width (in metres) and code (a string with a format of AAAA-1111-A1
where A is any character from the Latin alphabet and 1 is a number from 0 to 9)
 */
