import { useState, useEffect } from 'react';
import './App.css'

function Poke(props: { name: string, health: number, onChange?: () => void }) {
  const [pokeData, setPokeData] = useState<any>(null);
  const { name, health, onChange } = props;
  const [pokeHealth, setPokeHealth] = useState<number>(health);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url)
      .then(async res => {
        if (res.status == 200) {
          const json = await res.json();
          setPokeData(json)
        }
      }).catch(error => {
        console.log(error);
      });
  }, [name])

  if (!pokeData) return <div>loading</div>;

  const randomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random()
      * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setPokeHealth((pokeHealth) => pokeHealth - randomNumberInRange(1, 20));
    if (pokeHealth <= 0) {
      onChange();
    }
  };

  return (
    <>
      {
        pokeHealth <= 0 ?
          <div>poke be dead</div> :
          <>
            <div>name: {pokeData?.name}</div>
            <div>height: {pokeData?.height}</div>

            {/* {pokeData?.abilities?.map((item:any, index:number)=>{
              return (<>
              <div>***</div>
              <div key={index}>{item.ability.name}</div>
              </>)
            })} */}

            <div>health: {pokeHealth}</div>
            <button onClick={() => setPokeHealth((pokeHealth) => pokeHealth + 10)}>+</button>
            <button onClick={() => handleClick()}>-</button>
          </>
      }
    </>
  )
}

export default Poke
