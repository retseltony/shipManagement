using System;
using MediatR;
using Ships.Domain.Aggregates.ShipAggregate;

namespace Ships.Application.Queries
{
    public class GetAllShipsQueryHandler : IRequestHandler<GetAllShipsQuery, IEnumerable<PrimitiveShip>>
	{

        readonly IShipsFinder ShipsFinder;

        public GetAllShipsQueryHandler(IShipsFinder shipsFinder)
        {
            ShipsFinder = shipsFinder;
        }

        public  async Task<IEnumerable<PrimitiveShip>> Handle(GetAllShipsQuery query, CancellationToken cancellationToken)
        {
            return await ShipsFinder.Run(cancellationToken);
        }

    }
}

