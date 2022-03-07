using System;
using Ships.Domain.Exceptions;
using ValueOf;

namespace Ships.Domain.Aggregates.ShipAggregate.ValueObjects
{
	public class ShipLength : ValueOf<double, ShipLength>
	{
        const string ShipLengthText = "ship length";
		protected override void Validate()
		{
			validatePositiveNumber();
			validateShipMaxWith();
		}

		protected void validatePositiveNumber()
		{
			if (Value <= 0)
			{
				throw new PossitiveNumberException(Value, ShipLengthText);
			}
		}

		protected void validateShipMaxWith()
		{
			if (Value > 500)
			{
				throw new MaxShipDimesionException(Value, ShipLengthText);
			}
		}
	}
}

