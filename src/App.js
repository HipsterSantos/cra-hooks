import logo from './logo.svg';
import './App.css';
import { useState , useEffect, useRef,useLayoutEffect} from 'react';
import { useForm } from './useform';
import { Hello } from './Hello';
import {useFetch} from './hooks/useFetch';
import Hello from './hooks/Hello';
function App() {

const [form, handleForm] =  useForm({email:'',password:''})
const [showHello,setShowHello] = useState(true);
const {data,loading}  = useFectch('');
const inputRef = useRef();

  useEffect(()=>{
    console.log('updating')
    setShowHello(()=>(!showHello))
    
  },[form.email , form.password])
  
  
  return (
  
    <div className="App">
        <Hello/>
    </div>
  );
}

export default App;



// { showHello && <Hello/>}

// <header ref={inputRef} className="App-header">
//   <button onClick={console.log(inputRef.current)}></button>
// <h3>Testing react hooks</h3>
// <input type="email" name="email" value={form.email} onChange={handleForm}/>
// <input type="password" name="password" value={form.password} onChange={handleForm}/>

// <h1>output </h1>
// <p>{form.email}</p>and <p>{form.password}</p>
// </header>