using MediatR;


namespace Ships.Application.Commands
{
    public class DeleteShipCommandHandler : IRequestHandler<DeleteShipCommand, string>
    {
        readonly IShipDeletor ShipDeletor;
        public DeleteShipCommandHandler(IShipDeletor shipDeletor) => ShipDeletor = shipDeletor;

        public Task<string> Handle(DeleteShipCommand command, CancellationToken cancellationToken)
        {
            try
            {
                ShipDeletor.Run(command.Id, cancellationToken);
            }
            catch (Exception exp)
            {
                throw (new ApplicationException(exp.Message));
            }

            return Task.FromResult("The ship has been deleted!");
        }

        
    }
}

