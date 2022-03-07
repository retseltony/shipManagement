import React from "react";
import { useRecoilState } from "recoil";
import { defaultMessageValue, messageState } from "../atoms/MessageAtoms";
import {MessageType} from "../domain/Message"

export const timeoutMessage = (message: MessageType,setMessage:(value: any) => void)=>{
    setMessage(message)
    setTimeout(()=> { 
           setMessage(defaultMessageValue)
        }, 9000
    );
}


const AlertMessage = () => {

  const [{type,isHidden,message},setMessage] = useRecoilState(messageState); 
  const typesAlert:{[key:string]:string} = {
    error: 'alert-danger',
    warning: 'alert-warning',
    success: 'alert-success',
    info: 'alert-info'
  } 
  return (
    <div className={`alert alert-dismissible ${typesAlert[type]} mx-5 `} hidden={isHidden}>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={() =>setMessage(defaultMessageValue)}
      ></button>
      {message}
    </div>
  );
};

export default AlertMessage;
