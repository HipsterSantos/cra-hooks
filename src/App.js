import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react';
import { useForm } from './useform';
import { Hello } from './Hello';

function App() {

const [form, handleForm] =  useForm({email:'',password:''})
const [showHello,setShowHello] = useState(true);


  useEffect(()=>{
    console.log('updating')
    setShowHello(()=>(!showHello))
    
  },[form.email , form.password])
  
  
  return (
  
    <div className="App">
    
      { showHello && <Hello/>}

      <header className="App-header">
      <h3>Testing react hooks</h3>
      <input type="email" name="email" value={form.email} onChange={handleForm}/>
      <input type="password" name="password" value={form.password} onChange={handleForm}/>

      <h1>output </h1>
      <p>{form.email}</p>and <p>{form.password}</p>
      </header>
      
    </div>
  );
}

export default App;
