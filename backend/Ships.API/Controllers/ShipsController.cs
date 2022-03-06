using System;
using System.Net;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Ships.Application.Commands;
using Ships.Application.Queries;
using Ships.Domain.Aggregates.ShipAggregate;
using Ships.Domain.Exceptions;

namespace Ships.API.Controllers
{
	[ApiController]
	[Route("ships/", Name = "Ships Management")]
	public class ShipsController: ControllerBase
	{

		private readonly ILogger<ShipsController> _logger;
		private readonly IMediator _mediator;

		public ShipsController(ILogger<ShipsController> logger, IMediator mediator)
		{
			_logger = logger;
			_mediator = mediator;
		}

		[HttpGet( Name ="Get ships")]
		public async Task<IActionResult> GetAsync()
		{
            try
            {
				var ships = await _mediator.Send(new GetAllShipsQuery());
				return Ok(ships);
			}
			catch (Exception e)
			{
				return Problem(e.Message);
			}
			
		}

		[HttpGet("{id}", Name ="Get ship by Id")]
		public async Task<IActionResult> Get(string id)
		{
			try
			{
				var ship = await _mediator.Send(new SearchByIdQuery(id));
				return Ok(ship);
			}
			catch (ShipNotFound e)
			{
				return NotFound();
			}
			catch (Exception e)
			{
                return Problem(e.Message);
			}
		}

        [HttpPost( Name = "Create ship")]
		public async Task<ActionResult> PostAsync([Bind("name, length, width, code")] PrimitiveShip ship )
		{
			try {
				var response = await _mediator.Send(new CreateShipCommand(Guid.NewGuid().ToString(), ship.Name, ship.Length, ship.Width, ship.Code));
				return Content(response);
			}
			catch (Exception e) {
				return Content(e.Message);
			}
			
		}
	}
}

