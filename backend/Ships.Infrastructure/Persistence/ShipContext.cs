using Microsoft.EntityFrameworkCore;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Infrastructure.Persistence.EntityConfigurations;

namespace Ships.Infrastructure.Persistence
{
	public class ShipContext : DbContext
    {
        public ShipContext(DbContextOptions<ShipContext> options) : base(options) {
        } 

        public virtual DbSet<Ship>? Ships { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new ShipConfiguration());
        }
    }
}