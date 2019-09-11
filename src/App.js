import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const[age, setAge]= useState(21);
  const [name, setName]= useState('');
  return (
    <div className="App">
      <header className="App-header">
       React hook
      </header>
      <div>
         <p>
           Name: <input type='text' 
           value={name} 
           onChange={(e)=>setName(e.target.value)}
    
           />
         </p>
          <p> Age:{age}</p>
          <button className='btn' onClick ={()=>setAge(age+1)}>Increment Age</button>
          <button className='btn' onClick ={()=>setAge(age-1)}>Decrement Age</button>
          <p> Age:{age}  Name:{name}</p>
       </div>
    </div>
  );
}

export default App;
