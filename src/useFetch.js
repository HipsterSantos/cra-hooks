import react , {useState,useEffect} from 'react';

export const useFetch = url =>{
    const [state,setState] = useState({data: null,loading:false}); 

    useEffect( ()=>{
        setState({data:null,loading:true});
        fetch(url)
        .then(e=>e.text())
        .then(d =>{
            setState({data:d ,lodaing:false});
        })
        .catch(er=>{
            setState({
                data:null,loading: true
            })
        })
    },[url])
}