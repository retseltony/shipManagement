import { atom } from 'recoil';
import { Ship } from '../domain/Ship';


export  const shipListState = atom<Ship[]>({
    key: 'shipList',
    default:[]
});

export const shipSelected = atom<Ship | undefined>({
    key: 'currentShip',
    default: undefined
});