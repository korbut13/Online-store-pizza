import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { URL } from "../utils/constants";
import PizzaDetailsLoading from "./PizzaDetailsLoading";

export default function PizzaDetails(){
  const {id} = useParams();
 const [pizza, setPizza] = useState();

  const  getPizza = async() => {
    try {
      const {data} = await axios.get(`${URL}/${id}`);
      setPizza(data)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(()=> {
    getPizza();

  },[]);

  return (
    <>
  {!pizza ?
  (<div style={{textAlign:"center"}}>
  <PizzaDetailsLoading/>
</div>) :
  (<div>
    <h1>{pizza.title}</h1>
    <img src={pizza.imageUrl} alt="" />
    <h3>{pizza.price} ₽</h3>
    <h3>{pizza.rating}</h3>
  </div>
  )}
    </>
  )
}
