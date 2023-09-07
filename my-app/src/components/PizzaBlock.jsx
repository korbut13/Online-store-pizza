import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

import { addItem } from "../redux/slices/cartSlice";
import AddPizzaButton from "./AddPizzaButton";

export default function PizzaBlock({id, title, price, imageUrl, sizes, types}){
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.cartSlice);


  const [doughType, setDoughType] = useState(types[0]);

  const [size, setSize] = useState(sizes[0]);
  const typesOfDough = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-block">
    <img
      className="pizza-block__image"
      src={imageUrl}
      alt="Pizza"
    />
    <h4 className="pizza-block__title">{title}</h4>
    <div className="pizza-block__selector">
      <ul>
        {types.map(doughIndex => <li key={doughIndex} onClick={() => setDoughType(doughIndex)} className={doughIndex === doughType ? "active" : " "}>{typesOfDough[doughIndex]}</li>)}
      </ul>
      <ul>
        {sizes.map((value, index) => {
          return <li key={index} onClick={() => setSize(value)} className={size === value ? "active" : " "}>{value} см</li>
        })}
      </ul>
      <AddPizzaButton id={id} title={title} imageUrl={imageUrl} price={price} size={size} type={typesOfDough[doughType]}/>
    </div>
  </div>
  )
}
