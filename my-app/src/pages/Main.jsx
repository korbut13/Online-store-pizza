import { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlockSkeleton";
import createUrl from '../utils/createUrl';

export default function Main(){
  const valuesSorting = ['rating', 'price&order=asc', 'price&order=desc', 'title&order=asc', 'title&order=desc'];

  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(0);
  const [sortId, setSortId] = useState(0);

  useEffect(()=> {
    const valueSort = valuesSorting[sortId];
    let url =  createUrl(category, valueSort);

    fetch(url).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(resp => {
      setPizzas(resp);
      setLoading(false)
    });
    window.scrollTo(0,0)
  }, [category, sortId]);

  return (
    <div className="container">
    <div className="content__top">
        <Categories category={category} onClickCategory={(id)=> setCategory(id)}/>
        <Sort sortId={sortId} onClickSort={(id) => setSortId(id)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
        ? [...new Array(8)].map((skeleton, id) => <PizzaSkeleton key={id}/>)
        : pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)}
      </div>
    </div>
  )
}
