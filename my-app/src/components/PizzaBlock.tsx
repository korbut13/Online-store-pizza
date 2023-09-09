import { useState } from "react";
import { Link } from "react-router-dom";

import AddPizzaButton from "./AddPizzaButton";

type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

const PizzaBlock:React.FC<PizzaBlockProps> = ({id, title, price, imageUrl, sizes, types}) => {
  const [doughType, setDoughType] = useState(types[0]);

  const [size, setSize] = useState(sizes[0]);
  const typesOfDough = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>
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
};

export default PizzaBlock;
