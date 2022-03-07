
import axios, { AxiosResponse } from 'axios';



export const SHIPS_API = window._env_.SHIPS_API;
const axiosInstance = axios.create({
    baseURL: SHIPS_API,
    timeout: 3000,
    headers: {"Access-Control-Allow-Origin": "*"}
  });

export const getAllShips = async (): Promise<any> =>{

    const response: AxiosResponse= await axiosInstance.get('ships');  
    return response;
  //const payload:Ship[] | string =  response.ok ? await response.text() : await response.json()
  /*return new Promise((resolve, reject) => { resolve( {ok:true,payload:[
    {
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
  ]})});*/
}

/*export const getShipById = async (id: string):Promise<Response>=>{
    const response =  await fetch(`${SHIPS_API}/ships/${id}`)
    return response;
}

export const createShip = async (ship: Ship):Promise<Response> => {
    const response = await fetch(`${SHIPS_API}/ships`, {
        method: 'post',
        body: JSON.stringify(ship),
        headers: {'Content-Type': 'application/json'}
    });
    return response;
}

export const updateShip = async (ship: Ship): Promise<Response>=>{
    const response = await fetch(`${SHIPS_API}/ships/${ship.id}`, {
        method: 'put',
        body: JSON.stringify(ship),
        headers: {'Content-Type': 'application/json'}
    });
    return response;
}

export const deleteShip = async (id: string): Promise<Response>=>{
    return await fetch(`${SHIPS_API}/ships/${id}`, { method: 'delete' });
}*/

