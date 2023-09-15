import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import { URL } from "../utils/constants";
import PizzaDetailsLoading from "./PizzaDetailsLoading";

type Pizza = {
  imageUrl: string;
  title:string;
  price: number;
  rating:number;
}

const PizzaDetails:React.FC = () => {
 const {id} = useParams();
 const [pizza, setPizza] = useState<Pizza>();

 const controls = useAnimation();
  const startRotation = () => {
    const rotate = 360;
      controls.start({
        rotate: rotate,
        transition: {
          duration: 50,
          ease: "linear",
        },
      });
  };

  const  getPizza = async() => {
    try {
      const {data} = await axios.get<Pizza>(`${URL}/${id}`);
      setPizza(data);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(()=> {
      getPizza();
  },[]);

  useEffect(() => {
    startRotation()
  },[pizza])

  return (
    <>
  {!pizza ?
  (<div style={{textAlign:"center"}}>
  <PizzaDetailsLoading/>
</div>) :
  (<div className="pizza-details__root">
    <div className="pizza-details__cotainer-img">
    <motion.img
     initial={{ rotate: 0 }}
     animate={controls}
      className="pizza-details__img"
      src={pizza.imageUrl} alt=""
      />
    </div>
    <div className="pizza-details__info">
      <h1 className="pizza-details__info_title">{pizza.title}</h1>
      <div className="pizza-details__info_description">
        <p className="pizza-details__info_text">{pizza.title}</p>
        <div>
          <h3 className="pizza-details__info_price">Price <span>{pizza.price} ₽</span></h3>
          <h3 className="pizza-details__info_rating">Rating <span>{pizza.rating}</span></h3>
        </div>
      </div>
    </div>
    {/* <button style={{cursor:"pointer"}} onClick={startRotation}>Запустить вращение</button> */}
  </div>
  )}
    </>
  )
};

export default PizzaDetails;
