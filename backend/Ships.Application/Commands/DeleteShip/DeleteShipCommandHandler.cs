using MediatR;
using Ships.Application.Commands.DeleteShip;
using Ships.Domain.Aggregates.ShipAggregate;

namespace Ships.Application.Commands
{
    public class DeleteShipCommandHandler : IRequestHandler<DeleteShipCommand, String>
    {
        private readonly IShipRepository ShipRepository;
        public DeleteShipCommandHandler(IShipRepository shipRepository)
        {
            ShipRepository = shipRepository;
        }

        public async Task<string> Handle(DeleteShipCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var ship = await ShipRepository.SearchById(request.Id.Value);
                await ShipRepository.Delete(ship);
            }
            catch (Exception exp)
            {
                throw (new ApplicationException(exp.Message));
            }

            return  "The ship has been deleted!";
        }
    }
}

