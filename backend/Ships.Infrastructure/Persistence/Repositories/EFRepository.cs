using System;
using System.Linq.Expressions;
using Ships.Domain;
using Microsoft.EntityFrameworkCore;


namespace Ships.Infrastructure.Persistence
{
    public class EFRepository<T> : IRepository<T> where T : class
    {
        protected readonly DbContext Context;

        public EFRepository(DbContext dbContext)
        {
            Context = dbContext;
        }
                

        public virtual async Task<T?> SearchById(Guid id, CancellationToken cancellationToken = default)
        {
            return await Context.Set<T>().FindAsync(new object[] { id }, cancellationToken );
        }
        public virtual async Task<List<T>> List(CancellationToken cancellationToken = default)
        {
            return await Context.Set<T>().ToListAsync(cancellationToken);
        }
        public virtual async Task<List<T>> SearchByCriteria(System.Linq.Expressions.Expression<Func<T, bool>> predicate, CancellationToken cancellationToken = default)
        {
            return await Context.Set<T>()
                   .Where(predicate)
                   .ToListAsync(cancellationToken);
        }


        public async void Add(T entity, CancellationToken cancellationToken = default)    {
            Context.Set<T>().Add(entity);
            await Context.SaveChangesAsync(cancellationToken);
        }
        public async void Update(T entity, CancellationToken cancellationToken = default)
        {
            Context.Entry(entity).State = EntityState.Modified;
            await Context.SaveChangesAsync(cancellationToken);
        }
        public async void Delete(T entity, CancellationToken cancellationToken = default)
        {
            Context.Set<T>().Remove(entity);
            await Context.SaveChangesAsync(cancellationToken);
        }

        public Task<int> Count(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public Task<int> Count(CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }
    }
}

