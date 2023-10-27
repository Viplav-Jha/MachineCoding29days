
import { FC, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import {cartA,cartB} from './items'

interface Props{
  item:string
  handleSwapClick:(item:string)=>void
}

const App:FC<Props> =() =>{
  const [leftSwap,setLeftSwap] = useState(cartA)
  const [rightSwap,setRightSwap] = useState(cartB)

  
  
  const handleSwapClick=()=>{

  }

  return (
    <div className="App flex">
     <Cart item={leftSwap} cartName="CartA"/>
     <button onClick={handleSwapClick}>swap</button>
     <Cart item={rightSwap}  cartName="CartB"/>
    </div>
  );
}

export default App;
