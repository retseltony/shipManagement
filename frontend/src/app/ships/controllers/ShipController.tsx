import React, { useState } from "react";
import {  useRecoilState } from "recoil";
import { v4 } from "uuid";
import { useFormsInputs } from "../../utils/useFormsInputs";
import { Ship } from "../domain/Ship";
import { createShip, updateShip } from "../services/ShipsService";
import EditShip from "../views/EditShip";
import {shipListState, shipSelected} from  "../atoms/ShipsAtoms"
import { useNavigate } from "react-router-dom";


 const ShipController = ( )=>{
    const [currentShip,setCurrentShip] = useRecoilState(shipSelected);
    const {id,code,name,width,length} = currentShip || {id:undefined,code:'',name:'',width:'',length:''}
    const [ships,setShips] = useRecoilState<Ship[]>(shipListState);
    const [shipId,setShipId] = useState(id)
    const [{ shipCode,shipName,shipWidth,shipLength }, handleChange, onClearAll] = useFormsInputs({ shipCode:code,shipName:name,shipWidth:width,shipLength:length })
    const navigate = useNavigate();
    let handleSubmit = async (onsubmitEvent:any) => {
        onsubmitEvent.preventDefault();
        try {
            const ship = {
                id: shipId || v4(),
                code:shipCode,
                name:shipName,
                width:shipWidth,
                length:shipLength
            }
            const callApi = shipId ? updateShip : createShip
            let response = await callApi(ship)
            
            if (response.status === 200) {
                onClearAll()
                setShips((oldShips)=>[...oldShips,ship])
                setShipId(undefined)
                setCurrentShip(undefined)
                navigate("/")
            } else {
                alert(response.data)
            }
        } catch (err:any) {
            if(err.request){
                const _error = JSON.parse(err.request.response) 
                alert(_error.detail)
            }
            else
                alert(err.message)
            
        }
    };
    return <EditShip {...{shipCode,shipName,shipWidth,shipLength,handleChange,handleSubmit}} />
}

export default ShipController;