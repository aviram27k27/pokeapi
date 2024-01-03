import { useState } from 'react';
import './App.css'
import Poke from './Poke';

function Fight() {
  const [win, setWin] = useState<any>("");
  const x = "ditto";
  const y = "mew";

  return (
    <>
      {
        win ? <div>win</div>
          : <>
            <div>***fight****</div>
            <div style={{ display: "flex" }}>
              <div style={{}}>
                <Poke name={x} health={50} onChange={() => {console.log(`${x} fainted`); setWin(x)}} />
              </div>
              <div style={{}}>
                <Poke name={y} health={50} onChange={() => { console.log(`${y} fainted`) ; setWin(y)}} />
              </div>
            </div>
          </>
      }
    </>
  )
}

export default Fight
