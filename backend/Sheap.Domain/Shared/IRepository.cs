using System;
using Sheap.Domain.Shared;

namespace Sheap.Domain
{
    public interface IRepository<T> where T : IAggregateRoot
    {
        IUnitOfWork UnitOfWork { get; }
    }
}

