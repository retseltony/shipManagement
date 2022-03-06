import React, {useReducer} from 'react';
import { Ship } from '../domain/Ship';
interface ShipsState{
    ships: Ship[];
    shipSelected: Ship | undefined;
    isLoading: boolean;
    isUpdating: boolean;
}

enum ActionKind {
    LOADING_SHIPS='LOADING_SHIPS',
    LOAD_SHIPS='LOAD_SHIPS',
    CREATE_SHIP = 'CREATE_SHIP',
    CREATE_SHIP_SUCCESS = 'CREATE_SHIP_SUCCESS',
    CREATE_SHIP_FAIL = 'CREATE_SHIP_FAIL',
    DELETE_SHIP = 'DELETE_SHIP',
    DELETE_SHIP_SUCCESS = 'DELETE_SHIP_SUCCESS',
    DELETE_SHIP_FAIL = 'DELETE_SHIP_FAIL',
    UPDATE_SHIP = 'UPDATE_SHIP',
    UPDATE_SHIP_SUCCESS = 'UPDATE_SHIP_SUCCESS',
    UPDATE_SHIP_FAIL = 'UPDATE_SHIP_FAIL',
}
  
// An interface for our actions
interface Action {
type: ActionKind;
payload: any;
}

const initialState: ShipsState = {
    ships: [],
    shipSelected: undefined,
    isLoading: false,
    isUpdating: false
};

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
        throw state
  }
}

const ReactHoochShipsStore = ()=>{
    const [state, dispatch] = useReducer(ShipsReducer, initialState);
    
}