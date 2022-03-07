import React from 'react';
import {  useNavigate } from 'react-router-dom';

type EditShipType = {
    shipCode:string,
    shipName:string,
    shipWidth:number,
    shipLength:number,
    handleChange:(event:any) => void,
    handleSubmit:(event:any) => void
}

const EditShip = ({shipCode,shipName,shipWidth,shipLength,handleChange,handleSubmit}:EditShipType) => {
    const navigate = useNavigate();
    const formIsValid =  (shipCode && shipName && shipWidth  && shipLength)  ? true:false;
   
    return (
        <div className="card border-primary m-4" >
            <form onSubmit={handleSubmit} >
                <div className="card-header">Manage ship</div>
                <div className="card-body">
                    <div className="row">
                        <div className="form-group col m-5" >
                            <label className="col-form-label">Ship Name</label>
                            <input type="text" className="form-control" placeholder="Hamburg" id="shipName" name="shipName"
                                value={shipName}
                                onChange={(e)=>handleChange(e)}
                            />
                        </div>
                        <div className="form-group col m-5" >
                            <label className="col-form-label float-start"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Required pattern 'AAAA-1111-A1' -> A is a letter and 1 is a digit">Ship Code</label>
                            <input type="text" className="form-control text-uppercase" placeholder="AAAA-1111-A1" id="shipCode" name="shipCode"
                                onChange={(e)=>handleChange(e)}
                                value={shipCode} />
                        </div>
                        <div className="row">
                            <div className='col m-5'>
                                <label className="col-form-label ">Width</label>
                                <div className="input-group">
                                    <input type="number" className="form-control" placeholder="32" id="shipWidth" name="shipWidth"
                                    value={shipWidth}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                    <span className="input-group-text">meters</span>
                                </div>
                            </div>
                            <div className='col m-5'>
                                <label className="col-form-label">Length</label>
                                <div className="input-group">
                                    <input type="number" className="form-control" placeholder="249" id="shipLength" name="shipLength"
                                    value={shipLength}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                    <span className="input-group-text">meters</span>
                                    <div className="invalid-feedback">The ship length is invalid, it must be greater than 0 and lower than 500</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-5'>
                    </div>
                    <div className='col m-5 d-flex flex-row-reverse' >
                        <button type="submit" className="btn btn-primary m-2" style={{ width: "50%" }}
                        data-bs-toggle="tooltip" data-bs-placement="top" title="Submit the form and save the data"
                        disabled={!formIsValid}
                        >Save
                        </button>
                        <button type="button" className="btn btn-secondary m-2" style={{ width: "50%" }} onClick={()=>navigate('/')}
                        data-bs-toggle="tooltip" data-bs-placement="top" title="Cancel the action and go back to main page">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditShip;
