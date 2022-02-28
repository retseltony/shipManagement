using System;
using MediatR;
using Ships.Domain.ValueObjects;

namespace Ships.Application.Commands.DeleteShip
{
	public class UpdateShipCommand : IRequest<string>
	{
		public ShipId Id { get; private set; }

		public UpdateShipCommand(string id)
		{
			Id = ShipId.FromString(id);
		}
	}
}

