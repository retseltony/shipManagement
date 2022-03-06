using MediatR;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Commands
{
	public class CreateShipCommandHandler : IRequestHandler<CreateShipCommand, string>
	{
        readonly IShipCreator ShipCreator;

        public CreateShipCommandHandler(IShipCreator shipCreator)
		{
            ShipCreator = shipCreator;
        }

        public async Task<string> Handle(CreateShipCommand command, CancellationToken cancellationToken)
        {
            await ShipCreator.Run(
                ShipId.FromString(command.Id),
                ShipName.From(command.Name),
                ShipLength.From(command.Length),
                ShipWidth.From(command.Width),
                ShipCode.From(command.Code),
                cancellationToken
             );
            return "The ship has been created!";
        }
    }
}

