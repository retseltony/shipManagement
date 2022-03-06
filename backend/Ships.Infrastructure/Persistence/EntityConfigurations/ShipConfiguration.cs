using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Infrastructure.Persistence.EntityConfigurations
{
	public class ShipConfiguration : IEntityTypeConfiguration<Ship>
    {
        


        public ShipConfiguration(){}

        public void Configure(EntityTypeBuilder<Ship> builder)
        {
            builder.Property(s => s.Id)
                .IsRequired()
                .HasConversion(id => id.Value, id => ShipId.From(id));
            builder.Property(s => s.Name)
                .IsRequired()
                .HasMaxLength(255)
                .HasConversion(name => name.Value, name => ShipName.From(name)); 
            builder.Property(s => s.Width)
                .IsRequired()
                .HasConversion(width => width.Value, width => ShipWidth.From(width)); 
            builder.Property(s => s.Length)
                .IsRequired()
                .HasConversion(length => length.Value, length => ShipLength.From(length));
            builder.Property(s => s.Code)
                .IsRequired()
                .HasConversion(code => code.Value, code => ShipCode.From(code));
        }
    }
}
