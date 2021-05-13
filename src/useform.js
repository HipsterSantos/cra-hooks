import {useState} from 'react'; 

export const useForm = (initialValues) =>{
    const [value,setValues] = useState(initialValues);
    
    return [
        value,e =>{
            setValues({...value,[e.target.name]:e.target.value})
            console.log(value,{[e.target.name]:e.target.value});
        }
    ]
}

