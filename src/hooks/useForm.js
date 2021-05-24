import {useState} from 'react'; 

export const useForm = (intialValue) =>{
    
    const [values,setValues]  = useState(initialValue); 
  
    return [
        values,
        e=>{
            setValues(
                {...values,
                [e.target.name]:[e.target.value]
                })
        }
    ]

}