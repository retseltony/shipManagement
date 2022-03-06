using System;
using MediatR;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Aggregates.ShipAggregate.ValueObjects;

namespace Ships.Application.Queries
{
    public class SearchByIdQuery : IRequest<PrimitiveShip>
    {
        public ShipId Id { get; private set; }

        public SearchByIdQuery(string id)
        {
            Id = ShipId.FromString(id);
        }
    }
}

