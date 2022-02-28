using System;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.ValueObjects;

namespace Ships.Application.UseCases
{
	public class ShipCreator
	{
        private IShipRepository Repository { get; init; }

		public ShipCreator(IShipRepository repository)
		{
			Repository = repository;
		}

        public async Task Run(ShipId id, ShipName name, ShipLength length, ShipWidth width, ShipCode code)
        {
            Ship ship = Ship.Create(id, name, length, width, code);
            Repository.Add(ship);
        }
    }
}

