﻿using System;
using MediatR;
using Ships.Application.UseCases;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.ValueObjects;

namespace Ships.Application.Commands
{
    public class UpdateShipCommandHandler : IRequestHandler<UpdateShipCommand, string>
	{
        readonly ShipCreator ShipCreator;

        public UpdateShipCommandHandler( ShipCreator shipCreator)
		{
            ShipCreator = shipCreator;
        }

        public async Task<string> Handle(UpdateShipCommand command, CancellationToken cancellationToken)
        {
            await ShipCreator.Run(
                ShipId.FromString(command.Id),
                ShipName.From(command.Name),
                ShipLength.From(command.Length),
                ShipWidth.From(command.Width),
                ShipCode.From(command.Code)
             );
            return "The ship has been updated!";
        }
    }
}

