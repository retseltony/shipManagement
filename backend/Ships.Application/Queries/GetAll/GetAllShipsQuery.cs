using System;
using MediatR;
using Ships.Domain.Aggregates.ShipAggregate;

namespace Ships.Application.Queries
{
    public class GetAllShipsQuery : IRequest<IEnumerable<PrimitiveShip>>
    {
        
    }
}

