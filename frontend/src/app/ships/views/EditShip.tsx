import React, { useState, useEffect, SyntheticEvent } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useFormsInputs } from '../../utils/useFormsInputs';
import { Ship } from '../domain/Ship';

const EditShip = ({shipCode,shipName,shipWidth,shipLength,handleChange}:{shipCode:string,shipName:string,shipWidth:number,shipLength:number,handleChange:(event:any) => void}) => {
    const navigate = useNavigate();

    

    return (
        <div className="card border-primary m-4" >
            <form >
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
                            <label className="col-form-label">Ship Code</label>
                            <input type="text" className="form-control" placeholder="AAAA-1111-A1" id="shipCode" name="shipCode"
                                onChange={(e)=>handleChange(e)}
                                value={shipCode} />
                        </div>
                        <div className="row">
                            <div className='col m-5'>
                                <label className="col-form-label">Width</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="32" id="shipWidth" name="shipWidth"
                                    value={shipWidth}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                    <span className="input-group-text">meters</span>
                                </div>
                            </div>
                            <div className='col m-5'>
                                <label className="col-form-label">Lenght</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="249" id="shipLength" name="shipLength" 
                                    value={shipLength}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                    <span className="input-group-text">meters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-5'>
                    </div>
                    <div className='col m-5 d-flex flex-row-reverse' >
                        <button type="submit" className="btn btn-primary m-2" style={{ width: "50%" }}>Save</button>
                        <button type="button" className="btn btn-secondary m-2" style={{ width: "50%" }} onClick={()=>navigate('/')}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditShip;
