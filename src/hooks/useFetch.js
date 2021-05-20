import React, {useEffect,useState} from 'react';

const useFetch = (url)=>{
const [state, setState] = useState({data:null,loading:false});

  useEffect(()=>{
    setState({data:null , loading:true});
    fetch(url)
      .then(x = x.json())
      .then(data=>setState({data,loading:true}))
      .catch(console.error);
  },[url])

  return state;
}