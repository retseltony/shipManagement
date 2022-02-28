using MediatR;
using Ships.Domain.Aggregates.ShipAggregate;
namespace Ships.Application.Commands
{
    public class CreateShipCommand : IRequest<IPrimitiveShip>
    {
        public string Id { get; init; }
        public string Name { get; init; }
        public double Length { get; init; }
        public double Width { get; init; }
        public string Code { get; init; }

        public CreateShipCommand(string id, string name, double length, double width, string code)
	    {
            Id = id;
            Name = name;
            Length = length;
            Width = width;
            Code = code;
        }
    }
}

