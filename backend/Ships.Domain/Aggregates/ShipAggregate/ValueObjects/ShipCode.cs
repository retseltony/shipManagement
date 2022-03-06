using System;
using System.Text.RegularExpressions;
using Ships.Domain.Exceptions;
using ValueOf;

namespace Ships.Domain.Aggregates.ShipAggregate.ValueObjects
{
	
	public class ShipCode : ValueOf<string, ShipCode>
	{
		private readonly Regex Pattern = new(@"[A-Z]{4}\-\d{4}\-[A-Z]{1}\d{1}$");

		protected override void Validate() {
			if (!Pattern.IsMatch(Value))
			{
				throw new InvalidShipCodeException(Value);
			}
		}
	}
}

