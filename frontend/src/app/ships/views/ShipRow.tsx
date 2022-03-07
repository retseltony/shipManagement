import React from 'react';
import { Ship } from '../domain/Ship';
const ShipRow = ({ship,rowActive}:{ship:Ship, rowActive:string})=>{
    const active: string = ship.id === rowActive ? 'table-active': ''
    return (
        <tr className={`${active}`} key={ship.id}>
        <th scope="row">{ship.name}</th>
        <td>{ship.width} m</td>
        <td>{ship.length} m</td>
        <td>{ship.code}</td>
        <td> <button type="button" className="btn btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Ship">
            <i className="bi-pencil-square"></i></button>                
        <button type="button" className="btn btn-outline-danger" style = {{marginLeft: "5%"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Ship">
            <i className="bi-trash-fill"></i></button>
        </td>
    </tr>
    )
}

export default ShipRow;


