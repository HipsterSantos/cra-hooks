import React, {useEffect,useState} from 'react'; 

export const useFetch = (url) =>{

  const [{data,loading},setData] = useState({data:null, loading: true});
    useEffect(()=>{
      fetch(url).then( x=>x.text()).then(
        d => setData({data:d,loading:false})
      )
    },[url]);
    return [
      data,loading
    ]
}