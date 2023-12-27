import { useState, useEffect } from 'react';
import './App.css'

function Poke(props:{name: string}) {
  const [pokeData, setPokeData] = useState<any>(null);
  const {name}=props;

  useEffect(()=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url)
    .then(async res => {
      if(res.status==200){
        const json=await res.json();
        setPokeData(json)
      }
    }).catch(error => {
      // Handle any errors
      console.log(error);
  });
    },[name])

    if(!pokeData) return <div>loading</div>;

  return (
    <>
      <div>name: {pokeData?.name}</div> 
      <div>height: {pokeData?.height}</div> 

      {pokeData?.abilities?.map((item:any, index:number)=>{
        return (<>
        <div>***</div>
        <div key={index}>{item.ability.name}</div>
        </>)
      })}
   </>
  )
}

export default Poke
