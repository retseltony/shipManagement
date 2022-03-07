import React from "react";
import { useFormsInputs } from "../../utils/useFormsInputs";
import EditShip from "../views/EditShip";


 const EditContainer = ()=>{
    
    const [{ shipCode,shipName,shipWidth,shipLength }, handleChange, onClear] = useFormsInputs({ shipCode:'',shipName:'',shipWidth:'',shipLength:'' })

    /*const dispatchToProps = {
        onChange: useCallback(
            (filter) => dispatch(ProcessActionRepository.get().setFilter(filter)),
            [dispatch]
        )
    };*/
    return <EditShip {...{shipCode,shipName,shipWidth,shipLength,handleChange}} />
}

export default EditContainer;