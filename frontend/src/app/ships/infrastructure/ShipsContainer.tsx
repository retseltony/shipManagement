import React from 'react';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';
//import { Action } from '../domain/Action';
//import { ActionKind } from '../domain/ActionsKind';
//import { Ship } from '../domain/Ship';
import { ShipsState } from '../domain/ShipState';
import { getAllShips } from '../services/ShipsService';
import ShipManagement from '../views/ShipManagement';
//import  ShipsActions  from './ShipsSelectors';
  
// An interface for our actions
const initialState: ShipsState = {
    ships: [],
    shipSelected: undefined,
    isLoading: false,
    isUpdating: false
};

/*const {asyncDispatch} = ShipsActions

const ShipsReducer = ( state:ShipsState, action:Action)=> {
    const {type,payload} = action
    switch (type) {
        case ActionKind.LOAD_SHIPS:
            return {
                ...state,
                ships: payload,
                isLoading: false
            }
        case ActionKind.LOADING_SHIPS:
            return {
                ...state,
                isLoading: true
            }
        default:
            throw new Error('svxcvxcxcvcxvxv')
  }
}*/


  export  const getShips = selector({
        key: 'ships',
        get: async () => {
            const response = await getAllShips();
            return response.data;
        }
    });
  export const shipSelected = atom({
        key: 'currentShipId',
        default: ''
    });

