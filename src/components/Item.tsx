import React, { FC } from 'react'

interface props{
    item:string
    index:number
}

const Item:FC<props> = ({item,index}) => {
  return (
    <div>{item}{index}</div>
  )
}

export default Item;