import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Ship } from '../domain/Ship';
const ShipRow = ({ship,rowActive,currentShip,setCurrentShip}:{ship:Ship, rowActive:string | undefined ,currentShip:Ship | undefined,setCurrentShip:(value: any) => void })=>{
    const active: string = ship.id === rowActive ? 'table-active': ''
    const navigate = useNavigate();
    const onEditClick = ()=>{
        if(ship.id !== rowActive) 
            setCurrentShip(ship)
        navigate("/edit")
    }
    return (
        <tr className={`${active}`} key={ship.id} onClick={()=>setCurrentShip(ship)}>
            <th scope="row">{ship.name}</th>
            <td>{ship.width} m</td>
            <td>{ship.length} m</td>
            <td>{ship.code}</td>
            <td> <button type="button" className="btn btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Ship"
                onClick={onEditClick}
            >
                <i className="bi-pencil-square"></i></button>                
            <button type="button" className="btn btn-outline-danger" style = {{marginLeft: "5%"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Ship">
                <i className="bi-trash-fill"></i></button>
            </td>
        </tr>
    )
}

export default ShipRow;


