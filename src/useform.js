import {useState} from 'react'; 

export const useForm = initlaValues =>{
    const [value,setValues] = useState(initialValue)

    return [
        value,
        e =>{
            setValue({
                ...value,
                [e.target.name]: e.target.value
            })
        }
    ]
}