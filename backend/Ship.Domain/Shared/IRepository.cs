using System;
using System.Linq.Expressions;
using Ship.Domain.Shared;

namespace Ship.Domain
{
    public interface IRepository<T> where T : IAggregateRoot
    {
        void Add( T entity);

        void Update(T entity);

        Task<bool> Delete(Guid id);

        Task<T> SearchById(Guid id);

        IEnumerable<T> SearchByCriteria(Expression<Func<T, bool>> where);
        Task<int> Count(Expression<Func<T, bool>> where);
        Task<int> Count();

    }
}

