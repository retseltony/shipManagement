using System.Linq.Expressions;

namespace Ships.Domain
{
    public interface IRepository<T> 
    {
        void Add(T entity, CancellationToken cancellationToken );

        void Update(T entity, CancellationToken cancellationToken );

        void Delete(T entity, CancellationToken cancellationToken );

        Task<T?> SearchById(Guid id, CancellationToken cancellationToken );

        Task<List<T>> List(CancellationToken cancellationToken);

        Task<List<T>> SearchByCriteria(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken );
        Task<int> Count(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken );
        Task<int> Count(CancellationToken cancellationToken );

    }
}

