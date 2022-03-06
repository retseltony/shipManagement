using MediatR;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Commands
{
    public class UpdateShipCommandHandler : IRequestHandler<UpdateShipCommand, string>
	{
        readonly IShipUpgrader ShipUpgrader;

        public UpdateShipCommandHandler(IShipUpgrader shipUpgrader)
        {
            ShipUpgrader = shipUpgrader;

        }

        public async Task<string> Handle(UpdateShipCommand command, CancellationToken cancellationToken)
        {
            await ShipUpgrader.Run(
                ShipId.FromString(command.Id),
                ShipName.From(command.Name),
                ShipLength.From(command.Length),
                ShipWidth.From(command.Width),
                ShipCode.From(command.Code),
                cancellationToken
             );
            return "The ship has been updated!";
        }
    }
}

