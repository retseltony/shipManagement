import React from 'react';
import { Ship } from '../domain/Ship';
import ShipRow from './ShipRow';
const ShipManagement = ()=>{
    const ships: Ship[] | null= [{
            "id": "c804beb9-400f-4c5a-914a-75bd83c6ed35",
            "name": "New ship",
            "length": 10,
            "width": 10,
            "code": "AAAA-1111-A1"
        },
        {
            "id": "84ae5080-5286-49f4-b366-ac7d4d85f854",
            "name": "New ship2",
            "length": 12,
            "width": 10,
            "code": "AABB-1111-A1"
        }
    ]
    const rowActive = "c804beb9-400f-4c5a-914a-75bd83c6ed35"
 return <table className="table table-hover">
 <thead>
   <tr>
     <th scope="col">Name</th>
     <th scope="col">Length</th>
     <th scope="col">width</th>
     <th scope="col">code</th>
   </tr>
 </thead>
 <tbody>   
   {ships?.map(ship=>(<ShipRow {...{ship,rowActive}}/>))}
 </tbody>
</table>
}

export default ShipManagement;
