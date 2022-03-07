import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Ship, ShipTableType } from "../domain/Ship"
import ShipRow from "./ShipRow"

const ShipTable =({ships,rowActive,currentShip,hasShips, setCurrentShip,deleteShip}:ShipTableType)=>{
  const navigate = useNavigate();
  const handleOnAddClick =()=>{
    setCurrentShip(undefined)
    navigate("/create")
  }
  return( 
    <table className="table table-hover" key="ships-table">
    <thead>
      <tr key="table-header">
        <th scope="col">Name</th>
        <th scope="col">Length</th>
        <th scope="col">Width</th>
        <th scope="col">Code</th>
        <th scope="col">
          <button
            type="button"
            className="btn btn-outline-success"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add new Ship"
            onClick={handleOnAddClick}
          >
            <i className="bi-plus-lg"></i>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      { hasShips && ships.map((ship: Ship) => ( <ShipRow {...{ ship, rowActive,currentShip, setCurrentShip,deleteShip }} key={ship.id} />)) }
    </tbody>
  </table>
)}

export default ShipTable