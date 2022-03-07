
import axios, { AxiosResponse } from 'axios';
import { Ship } from '../domain/Ship';



export const SHIPS_API = window._env_.SHIPS_API;
const axiosInstance = axios.create({
    baseURL: SHIPS_API,
    timeout: 3000,
    headers: {"Access-Control-Allow-Origin": "*"}
  });

export const getAllShips = async (): Promise<AxiosResponse> =>{
    const response: AxiosResponse= await axiosInstance.get('ships');  
    return response;
}

export const getShipById = async (id: string):Promise<AxiosResponse>=>{
    const response =  await axiosInstance.get(`${SHIPS_API}/ships/${id}`)
    return response;
}

export const createShip = async (ship: Ship):Promise<AxiosResponse> => {
    const response : AxiosResponse = await axiosInstance.post('/ships', {
        ...ship
    });
    return response;
}

export const updateShip = async (ship: Ship): Promise<AxiosResponse>=>{
    const response = await axiosInstance.put(`${SHIPS_API}/ships/${ship.id}`, {
        data: {ship}
    });
    return response;
}

export const deleteShip = async (id: string): Promise<AxiosResponse>=>{
    return await axiosInstance(`${SHIPS_API}/ships/${id}`, { method: 'delete' });
}

