import React,{FC} from 'react'
import '../App.css'

interface Props {
    item:string[]
    cartName:string
}
const Cart:FC<Props> = ({item,cartName}) => {
  return (
    <div className='box flex'>
        <h3>{cartName}</h3>
        {
          item.map((item,index)=>{
            return <div key={index}>{index+1}. {item}</div>
          })
        }
    </div>
  )
}

export default Cart;