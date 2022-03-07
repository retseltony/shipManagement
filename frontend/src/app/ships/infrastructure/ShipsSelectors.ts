import {Response} from 'node-fetch'
import { Dispatch } from 'react';
import { Action } from '../domain/Action';

import { ActionKind } from '../domain/ActionsKind';
//import { Ship } from '../domain/Ship';
import { getAllShips } from '../services/ShipsService'

type AsyncCallback = (dispatch: Dispatch<Action>,payload:any| undefined)=>void
const ShipsActions = {
    asyncDispatch :  (asyncCallBack:AsyncCallback, dispatch:Dispatch<Action>, payload:any | undefined=undefined)=>  { // adjust args to your needs
        asyncCallBack(dispatch,payload);        
    }    
}

export default ShipsActions;


