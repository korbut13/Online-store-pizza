import { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlockSkeleton";
import {createUrl, createUrlWithPage} from '../utils/createUrl';
import Pagination from "../components/Pagination";
import { LIMIT } from "../utils/constants";

export default function Main({searchValue}){
  const valuesSorting = ['rating', 'price&order=asc', 'price&order=desc', 'title&order=asc', 'title&order=desc'];

  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(0);
  const [sortId, setSortId] = useState(0);
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(()=> {
    const valueSort = valuesSorting[sortId];
    let url =  createUrlWithPage(category, valueSort, searchValue, page);

    fetch(url).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(resp => {
      setPizzas(resp);
      setLoading(false);
    });
    window.scrollTo(0,0)
  }, [category, sortId, searchValue, page]);


  useEffect(()=> {
    const valueSort = valuesSorting[sortId];
    let url =  createUrl(category, valueSort, searchValue);

    fetch(url).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(resp => {
      setAllProducts(resp);
    });
    window.scrollTo(0,0)
  }, [category, sortId, searchValue, page]);

  return (
    <div className="container">
    <div className="content__top">
        <Categories category={category} onClickCategory={(id)=> setCategory(id)} setPage={setPage}/>
        <Sort sortId={sortId} onClickSort={(id) => setSortId(id)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
        ? [...new Array(8)].map((skeleton, id) => <PizzaSkeleton key={id}/>)
        : pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)}
      </div>
      {allProducts.length >LIMIT && (<Pagination page={page} onChangePage={setPage} amountProducts={allProducts.length}/>)}
    </div>
  )
}
