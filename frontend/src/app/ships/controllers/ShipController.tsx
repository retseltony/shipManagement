import React, { useState } from "react";
import {  useRecoilState, useSetRecoilState } from "recoil";
import { v4 } from "uuid";
import { useFormsInputs } from "../../utils/useFormsInputs";
import { Ship } from "../domain/Ship";
import { createShipService, updateShipService } from "../services/ShipsService";
import EditShip from "../views/EditShip";
import {shipListState, shipSelected} from  "../atoms/ShipsAtoms"
import { useNavigate } from "react-router-dom";
import { timeoutMessage } from "../../main/view/AlertMessages";
import { messageState } from "../../main/atoms/MessageAtoms";


 const ShipController = ( )=>{
    const [currentShip,setCurrentShip] = useRecoilState(shipSelected);
    const {id,code,name,width,length} = currentShip || {id:undefined,code:'',name:'',width:'',length:''}
    const setShips = useSetRecoilState<Ship[]>(shipListState);
    const [shipId,setShipId] = useState(id)
    const [{ shipCode,shipName,shipWidth,shipLength }, handleChange, onClearAll] = useFormsInputs({ shipCode:code,shipName:name,shipWidth:width,shipLength:length })
    const setMessage = useSetRecoilState(messageState);
    const navigate = useNavigate();
    let handleSubmit = async (onsubmitEvent:any) => {
        onsubmitEvent.preventDefault();
        try {
            const ship = {
                id: shipId || v4(),
                code:shipCode.toUpperCase(),
                name:shipName,
                width:shipWidth,
                length:shipLength
            }
            const callApi = shipId ? updateShipService : createShipService
            let response = await callApi(ship)
            
            if (response.status === 200) {
                onClearAll()
                setShips((oldShips)=>[...oldShips ??=[],ship])
                setShipId(undefined)
                setCurrentShip(undefined)
                navigate("/")
                timeoutMessage({type:"success",message:response.data,isHidden:false},setMessage)
            } 
        } catch (err:any) {
            if(err.request){
                const _error = JSON.parse(err.request.response) 
                timeoutMessage({type:"error",message: _error.detail ,isHidden:false},setMessage)
            }
            else
                timeoutMessage({type:"error",message: err.message ,isHidden:false},setMessage)
            
        }
    };
    return <EditShip {...{shipCode,shipName,shipWidth,shipLength,handleChange,handleSubmit}} />
}

export default ShipController;