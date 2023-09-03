import { useState, useEffect, useContext } from "react";
import {useSelector, useDispatch} from 'react-redux';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlockSkeleton";
import {createUrl} from '../utils/createUrl';
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import {setCategoryId} from '../redux/slices/filterSlice'


export default function Main(){
  const valuesSorting = ['rating', 'price&order=asc', 'price&order=desc', 'title&order=asc', 'title&order=desc'];

  const {categoryId, sortId} = useSelector((state) => state.filterSlice);

  const dispatch = useDispatch();
  const valueSort = valuesSorting[sortId];
  const {searchValue} = useContext(SearchContext);

  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  useEffect(()=> {
    let url =  createUrl(categoryId, valueSort, searchValue, page);

    fetch(url).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(resp => {
      setPizzas(resp);
      setLoading(false);
    });
    window.scrollTo(0,0)
  }, [categoryId, sortId, searchValue, page]);


  return (
    <div className="container">
    <div className="content__top">
        <Categories category={categoryId} onClickCategory={onChangeCategory} setPage={setPage}/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
        ? [...new Array(8)].map((skeleton, id) => <PizzaSkeleton key={id}/>)
        : pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)}
      </div>
      <Pagination page={page} onChangePage={setPage}/>
    </div>
  )
}
