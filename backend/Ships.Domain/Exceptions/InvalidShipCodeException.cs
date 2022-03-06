using System;
namespace Ships.Domain.Exceptions
{
	public class InvalidShipCodeException: Exception
	{
		public InvalidShipCodeException( string shipCode): base($"The ship code ({shipCode}) is invalid, it doesn't match with the required pattern 'AAAA-1111-A1' - where A is any character from the Latin alphabet and 1 is a number from 0 to 9")
		{
		}
	}
}