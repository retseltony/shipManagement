using System;
namespace Ships.Domain.Exceptions
{
	public class PossitiveNumberException: Exception
	{
		public PossitiveNumberException(double number,string attribute) : base($"The {attribute} with value ({number}) need to be > 0")
		{
		}
	}
}

