import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { shipListState } from '../atoms/ShipsAtoms';
import { Ship } from '../domain/Ship';
import { getAllShips } from '../services/ShipsService';
import ShipManagement from '../views/ShipManagement';

const ShipsController = ()=>{
    const [ships,setShips] = useRecoilState<Ship[]>(shipListState);

    const getShips = async () => {
        const response = await getAllShips();
        if(response.data && response.data.length > 0) {
            setShips(()=>[...response.data])
        }
    }

    useEffect(() => {
        getShips();        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return <ShipManagement {...{ships}} />
}

export default ShipsController;

