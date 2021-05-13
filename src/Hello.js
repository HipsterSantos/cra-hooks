import react , {useEffect,useState} from 'react'; 

export const Hello = ()=>{
    useEffect(()=>{
        console.log("Rendered")
        return () =>{
            console.log("Unmounted unrendred")
        }
    },[])

    return <div>Hey Hello</div>;
}