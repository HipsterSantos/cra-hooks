export const useForm2 = (initValues) =>{
    const [value,setValue] = useState(initValues);
    return [
        value,
        e =>{
            setValue({
                ...value,
                [e.target.name]:[e.target.value]
            })
        }
    ]
}

let [value,handle] = useForm2(['anime',true]);
 handle = ()=> {
    console.log('hey')
}