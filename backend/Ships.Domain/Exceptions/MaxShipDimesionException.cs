using System;
namespace Ships.Domain.Exceptions
{
	public class MaxShipDimesionException : Exception
	{
		public MaxShipDimesionException(double number,string attribute) : base($"The {attribute} with value ({number}) needs to be < 500")
		{
		}
	}
}

