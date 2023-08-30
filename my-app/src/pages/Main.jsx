import { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlockSkeleton";

export default function Main(){

  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://64ef4b85219b3e2873c4449b.mockapi.io/items";

  useEffect(()=> {
    fetch(url).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(resp => {
      setPizzas(resp);
      setLoading(false)
    })
  }, []);

  return (
    <>
    <div className="content__top">
        <Categories/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
        ? [...new Array(8)].map((skeleton, id) => <PizzaSkeleton key={id}/>)
        : pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)}
      </div>
    </>
  )
}
