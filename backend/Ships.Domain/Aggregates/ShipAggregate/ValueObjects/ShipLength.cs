using System;
using Ships.Domain.Exceptions;
using ValueOf;

namespace Ships.Domain.Aggregates.ShipAggregate.ValueObjects
{
	public class ShipLength : ValueOf<double, ShipLength>
	{
		protected override void Validate()
		{
			if (Value <= 0)
			{
				throw new PossitiveNumberException(Value, "ship length");
			}
		}
	}
}

