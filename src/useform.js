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

const useForm2 = (initValues) =>{
    const [value,setValue] = useState(initValues);
    return [
        value,
        e =>{
            setValues({
                ...values,
                [e.target.name]:[e.target.value]
            })
        }
    ]
}

let [value,handle] = userForm(['anime',true]);
function handle(){
    console.log('hey')
}