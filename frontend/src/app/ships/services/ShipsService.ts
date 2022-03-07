
import axios, { AxiosResponse } from 'axios';
import { Ship } from '../domain/Ship';



export const SHIPS_API = window._env_.SHIPS_API;
const axiosInstance = axios.create({
    baseURL: SHIPS_API,
    timeout: 3000,
    headers: {"Access-Control-Allow-Origin": "*"}
  });

export const getAllShipsService = async (): Promise<AxiosResponse> =>{
    const response: AxiosResponse= await axiosInstance.get('ships');  
    return response;
}

export const getShipByIdService = async (id: string):Promise<AxiosResponse>=>{
    const response =  await axiosInstance.get(`/ships/${id}`)
    return response;
}

export const createShipService = async (ship: Ship):Promise<AxiosResponse> => {
    const response : AxiosResponse = await axiosInstance.post('/ships', {
        ...ship
    });
    return response;
}

export const updateShipService = async (ship: Ship): Promise<AxiosResponse>=>{
    const response = await axiosInstance.put(`/ships/${ship.id}`, {
        ...ship
    });
    return response;
}

export const deleteShipService = async (id: string): Promise<AxiosResponse>=>{
    const response = await axiosInstance.delete(`/ships/${id}`);
    return response;
}

