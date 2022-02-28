using System.Linq.Expressions;

namespace Ships.Domain
{
    public interface IRepository<T> 
    {
        void Add(T entity);

        void Update(T entity);

        Task Delete(Guid id);

        Task Delete(T entity);

        Task<T> SearchById(Guid id);

        IEnumerable<T> SearchByCriteria(Expression<Func<T, bool>> where);
        Task<int> Count(Expression<Func<T, bool>> where);
        Task<int> Count();

    }
}

