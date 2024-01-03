import { useState } from 'react';
import './App.css'
import Poke from './Poke';

function Pokes() {
  const [name, setName] = useState<string>("");

   return (
    <>
      <input 
       type="text"  
        onChange={(e) => setName(e.target.value)}
       value={name}/>
      
      <Poke name={name} health={50}/>
    </>
  )
}

export default Pokes
