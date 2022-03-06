using System;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Shared;

namespace Ships.Infrastructure.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ShipContext _context;

        public UnitOfWork(ShipContext context)
        {
            _context = context;
            Ships = new EFShipRepository(_context);
        }

        public IShipRepository Ships { get; private set; }


        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}

