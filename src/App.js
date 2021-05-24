import logo from './logo.svg';
import './App.css';
import { useState , useEffect, useRef,useLayoutEffect} from 'react';
import { useForm } from './hooks/useForm';
import { useFetch }from './hooks/useFetch';

function App() {
const inputRef = useRef();
const [count,setCount] = useState(10);
const [value, handleForm] = useForm({email:'',password:''});
const [data,loading] = useFetch(`http://numbersapi.com/${count}`);
const focusEmail = useRef(0);
useEffect(()=>{
  console.log('hey I rendered')
  return ()=>{
  }
},[]);
return (  
    <div className="App-header">
      <h2>Hey we're here just to take a look to react hooks</h2>
      <button onClick={()=>setCount(c=>c+1)}>
        +
      </button>
      <button type="button" onClick={focusEmail.focus}>Focus</button>
      <h3>Count {count}</h3>
      <div>
        <input type="text" ref={focusEmail} name="email" placeholder="your name" 
        onChange={handleForm}/>
        <input type="password"  name="password" placeholder="your password"
         onChange={handleForm}/>
      </div>
      <p>{value.name}</p> and <p>{value.email}</p>
      <div>
        <h3>{loading?'...':data}</h3>
      </div>
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