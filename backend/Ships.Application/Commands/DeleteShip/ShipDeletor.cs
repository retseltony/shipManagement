using Ships.Domain.Shared;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Commands
{
    public class ShipDeletor : IShipDeletor
    {
        private IUnitOfWork UnitOfWork { get; init; }

        public ShipDeletor(IUnitOfWork unitOfWork)
        {
            UnitOfWork = unitOfWork;
        }

        public async void Run(ShipId id, CancellationToken cancellationToken)
        {
            var ship = await UnitOfWork.Ships.SearchById(id.Value, cancellationToken);
            if (ship != null)
                UnitOfWork.Ships.Delete(ship, cancellationToken);
        }
    }
}

