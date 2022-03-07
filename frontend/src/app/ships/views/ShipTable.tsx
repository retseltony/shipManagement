import React from "react"
import { NavLink } from "react-router-dom"
import { Ship } from "../domain/Ship"
import ShipRow from "./ShipRow"

const ShipTable =({ships,rowActive,setCurrentShip}:{ships:Ship[],rowActive:string,setCurrentShip:(value: any) => void})=>( 
    <table className="table table-hover" key="ships">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Length</th>
        <th scope="col">Width</th>
        <th scope="col">Code</th>
        <th scope="col">
        <NavLink to="/create">
          <button
            type="button"
            className="btn btn-outline-success"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add new Ship"
          >
            <i className="bi-plus-lg"></i>
          </button>
          </NavLink>
        </th>
      </tr>
    </thead>
    <tbody>
      { ships.map((ship: Ship) => ( <ShipRow {...{ ship, rowActive }} key={ship.id} />)) }
    </tbody>
  </table>
)

export default ShipTable