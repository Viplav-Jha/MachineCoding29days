
import { FC, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import {cartA,cartB} from './items'

interface Props{
  item:string
  handleSwapClick:(item:string)=>void

}

const App:FC<Props> =() =>{
  const [cart1,setCart1] = useState(cartA)
  const [cart2,setCart2] = useState(cartB)


  
  const handleSwapClick=()=>{
   const newCartA =[...cart1]
   const newCartB =[...cart2]

   for(let i=0;i<cart1.length;i+=2){
     newCartA[i] =cart2[i];
     newCartB[i]=cart1[i]
  
   }
   setCart1(newCartA)
   setCart2(newCartB)
  }

  return (
    <div className="App flex">
     <Cart item={cart1} cartName="CartA"/>
     <button onClick={handleSwapClick}>swap odds</button>
     <Cart item={cart2}  cartName="CartB"/>
    </div>
  );
}

export default App;
