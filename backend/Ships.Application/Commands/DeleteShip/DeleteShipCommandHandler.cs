using System;
using Ships.Application.UseCases;
using Ships.Domain.Shared;
using Ships.Domain.ValueObjects;

namespace Ships.Application.Commands
{
	public class CreateShipCommandHandler : ICommandHandler<CreateShipCommand>
	{
        readonly ShipCreator ShipCreator;

        public CreateShipCommandHandler( ShipCreator shipCreator)
		{
            ShipCreator = shipCreator;
        }

        public async void Handle(CreateShipCommand command)
        {
            await ShipCreator.Run(
                ShipId.From(Guid.Parse(command.Id)),
                ShipName.From(command.Name),
                ShipLength.From(command.Length),
                ShipWidth.From(command.Width),
                ShipCode.From(command.Code)
             );
        }
    }
}

