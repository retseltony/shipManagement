using System;
using Ships.Domain.Exceptions;
using ValueOf;

namespace Ships.Domain.Aggregates.ShipAggregate.ValueObjects
{
	public class ShipWidth : ValueOf<double, ShipWidth>
	{
		const string ShipWidthText = "ship width";
		protected override void Validate()
        {
			validatePositiveNumber();
			validateShipMaxWith();
		}

		protected void validatePositiveNumber() {
			if (Value <= 0)
			{
				throw new PossitiveNumberException(Value, ShipWidthText);
			}
		}

		protected void validateShipMaxWith()
		{
			if (Value > 300)
			{
				throw new MaxShipDimesionException(Value, ShipWidthText);
			}
		}
	}
}

