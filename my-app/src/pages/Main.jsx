import { useEffect, useRef } from "react";
import {useSelector, useDispatch} from 'react-redux';
import qs from 'qs';
import {useNavigate}  from 'react-router-dom';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlockSkeleton";
import {createUrl} from '../utils/createUrl';
import Pagination from "../components/Pagination";
import {setCategoryId, setFilters, selectFilter} from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizza} from "../redux/slices/pizzaSlice";


export default function Main(){

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const {categoryId, sortId, currentPage, searchValue} = useSelector(selectFilter);
  const {items, status} = useSelector(selectPizza);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const valuesSorting = ['rating', 'price&order=asc', 'price&order=desc', 'title&order=asc', 'title&order=desc'];
  const valueSort = valuesSorting[sortId];

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  useEffect(() => {
    if(window.location.search){

      const params = qs.parse(window.location.search.substring(1));

      const sortId = valuesSorting.findIndex((str) => {

        return str === params.sort;
      });

      delete Object.assign(params, {sortId}).sort;
      dispatch(
        setFilters({
          ...params
        })
      );

      isSearch.current = true;
    }
  }, []);


  useEffect(()=> {
    if(!isSearch.current){
      window.scrollTo(0,0);
      let url =  createUrl(categoryId, valueSort, searchValue, currentPage);
      dispatch(fetchPizzas(url));
    }
    isSearch.current = false;
  }, [categoryId, searchValue, currentPage, valueSort]);


  useEffect(()=> {
    if(isMounted.current){
      let queryString = qs.stringify({
        categoryId: categoryId,
        sort:valueSort,
        currentPage: currentPage
      });

      if(searchValue){
       let searchStr = qs.stringify({
          search: searchValue
        });
        queryString = queryString+`&${searchStr}`;
      }
      navigate(`?${queryString}`)
    };
    isMounted.current = true;
  }, [categoryId,searchValue, currentPage, valueSort])


  return (
    <div className="container">
    <div className="content__top">
        <Categories category={categoryId} onClickCategory={onChangeCategory} />
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'loading'
        ? [...new Array(8)].map((_, id) => <PizzaSkeleton key={id}/>)
        : items.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)}
      </div>
      <Pagination/>
    </div>
  )
}
