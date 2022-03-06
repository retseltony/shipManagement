using System;
using MediatR;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Commands
{
	public class DeleteShipCommand : IRequest<string>
	{
		public ShipId Id { get; private set; }

		public DeleteShipCommand(string id)
		{
			Id = ShipId.FromString(id);
		}
	}
}

