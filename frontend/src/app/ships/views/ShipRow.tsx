import React from 'react';
import { Ship } from '../domain/Ship';
const ShipRow = ({ship,rowActive}:{ship:Ship, rowActive:string})=>{
    const active: string = ship.id === rowActive ? 'table-active': ''
    return (
        <tr className={`${active}`} key={ship.id}>
            <th scope="row">{ship.name}</th>
            <td>{ship.width}</td>
            <td>{ship.length}</td>
            <td>{ship.code}</td>
        </tr>
    )
}

export default ShipRow;
