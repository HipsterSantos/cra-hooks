import {useState} from 'react'; 

export const useForm = (initialValue) =>{
    
    const [values,setValues]  = useState(initialValue); 
    const {email,password} = values;
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