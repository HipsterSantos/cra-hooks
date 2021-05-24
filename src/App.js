import logo from './logo.svg';
import './App.css';
import { useState , useEffect, useRef,useLayoutEffect} from 'react';
import { useForm } from './hooks/useForm';


function App() {
const inputRef = useRef();
const [{count,count2},setCount] = useState({count:10,count2:2});
const [value, handleForm] = useForm({email:'',password:''});
console.log(count);
return (  
    <div className="App-header">
      <h2>Hey we're here just to take a look to react hooks</h2>
      <button onClick={()=>setCount(c=>({count:c+1,count2}))}>
        +
      </button>
      <h3>Count {count}</h3>
      <div>
        <input type="text" value={value.email} placeholder="your name" 
        onChange={handleForm}/>
        <input type="password" value={value.password} placeholder="your password"
         onChange={handleForm}/>
      </div>
      <p>{value.name}</p> and <p>{value.email}</p>
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