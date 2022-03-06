using System;
using Ships.Domain.Exceptions;
using ValueOf;

namespace Ships.Domain.Aggregates.ShipAggregate.ValueObjects
{
	public class ShipWidth : ValueOf<double, ShipWidth>
	{
		protected override void Validate()
		{
			if (Value <= 0)
			{
				throw new PossitiveNumberException(Value, "ship width");
			}
		}
	}
}

