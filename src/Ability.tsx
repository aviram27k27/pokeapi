import { useState, useEffect } from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function Ability(props) {

  return (
    <>
     <div>Ability</div>
     <Link to={"/pokes"}>חזרה</Link>
   </>
  )
}

export default Ability
