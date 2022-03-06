using System;
using MediatR;
using Ships.Domain.Aggregates.ShipAggregate;

namespace Ships.Application.Queries
{
    public class SearchByIdQueryHandler : IRequestHandler<SearchByIdQuery, PrimitiveShip>
	{

        readonly IShipFinder ShipFinder;

        public SearchByIdQueryHandler(IShipFinder shipFinder)
        {
            ShipFinder = shipFinder;
        }

        public  async Task<PrimitiveShip> Handle(SearchByIdQuery query, CancellationToken cancellationToken)
        {
            return await ShipFinder.Run(query.Id ,cancellationToken);
        }

    }
}

