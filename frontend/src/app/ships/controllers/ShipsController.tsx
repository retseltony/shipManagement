import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { messageState } from '../../main/atoms/MessageAtoms';
import { timeoutMessage } from '../../main/view/AlertMessages';
import { shipListState } from '../atoms/ShipsAtoms';
import { Ship } from '../domain/Ship';
import { getAllShipsService, deleteShipService  } from '../services/ShipsService';
import ShipManagement from '../views/ShipManagement';

const ShipsController = ()=>{
    const [ships,setShips] = useRecoilState<Ship[]>(shipListState);
    const setMessage = useSetRecoilState(messageState);
    const getShips = async () => {
        const response = await getAllShipsService();
        if(response.data && response.data.length > 0) {
            setShips(response.data)
        }
    }

    const deleteShip = async (id:string) => {
        try{
        const response = await deleteShipService(id);
        setShips((oldShips)=>[...oldShips.filter(ship => ship.id !== id)])
        timeoutMessage({type:"success",message:response.data,isHidden:false},setMessage)
        } catch (err:any) {
            if(err.request){
                const _error = JSON.parse(err.request.response) 
                timeoutMessage({type:"error",message:_error.detail,isHidden:false},setMessage)
            }
            else
                timeoutMessage({type:"error",message:err.message,isHidden:false},setMessage)
                alert(err.message)
            
        }
    }

    useEffect(() => {
        getShips();        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return <ShipManagement {...{ships,deleteShip}} />
}

export default ShipsController;

