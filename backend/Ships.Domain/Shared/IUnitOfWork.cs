using System;
using Ships.Domain.Aggregates.ShipAggregate;

namespace Ships.Domain.Shared
{
    public interface IUnitOfWork : IDisposable
    {
        IShipRepository Ships { get; }
        int Complete();
    }
}

