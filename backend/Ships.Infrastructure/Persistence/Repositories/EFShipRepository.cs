using System;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Ships.Domain;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Infrastructure.Persistence
{
	public class EFShipRepository : EFRepository<Ship>, IShipRepository
	{
		public EFShipRepository(ShipContext dbContext) : base(dbContext)
		{
		}

        public ShipContext? ShipContext => Context as ShipContext;

		public async Task<Ship?> SearchById(ShipId id, CancellationToken cancellationToken = default)
		{
			return await Context.Set<Ship>().FindAsync(new object[] { id }, cancellationToken);
		}
    }
}

