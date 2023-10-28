import React, { FC } from "react";
import "../App.css";
import Item from "./Item";

interface Props {
  item: string[];
  cartName: string;
}
const Cart: FC<Props> = ({ item, cartName }) => {
  return (
    <div className="box flex">
      <h3>{cartName}</h3>
      {item.map((item, index) => {
        return <Item key={index} item={item} index={index} />;
      })}
    </div>
  );
};

export default Cart;
