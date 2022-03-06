using System;
namespace Ships.Domain.Exceptions
{
	public class ShipNotFound : Exception
	{
		public ShipNotFound() : base($"Ship not found ")
		{
		}
	}
}

