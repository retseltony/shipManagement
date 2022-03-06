using System;
using ValueOf;

namespace Ships.Domain.Aggregates.ShipAggregate.ValueObjects
{
	public class ShipId : ValueOf<Guid, ShipId>
	{
		public static ShipId FromString(string id) {
			return ShipId.From(Guid.Parse(id));
		}
	}
}

