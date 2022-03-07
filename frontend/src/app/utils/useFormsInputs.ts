import { useState } from 'react'

export const useFormsInputs = (initialsValues: any)=>{
    const [values,setValues] = useState(initialsValues)
   
    const onChange = (event:any) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })        
    } 
    const onClear = (input:any) => {
        setValues({
            ...values,
            [input]: ''
        })        
    }
    const onClearAll = () => {
        let cleanValues:{[key:string]:any} = {}
        Object.keys(values).forEach(input=>{
            cleanValues[input]=''
        })
        setValues({...cleanValues })        
    } 
    return [
        values, 
        onChange,
        onClear,
        onClearAll
    ]
    
} 