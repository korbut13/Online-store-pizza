import { useEffect, useRef } from "react";
import {useSelector} from 'react-redux';
import qs from 'qs';
import {useNavigate}  from 'react-router-dom';
import {motion as m} from 'framer-motion';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlockSkeleton";
import {createUrl} from '../utils/createUrl';
import Pagination from "../components/Pagination";
import {setCategoryId, setFilters} from '../redux/filters/slice';
import { selectFilter } from "../redux/filters/selectors";
import { fetchPizzas} from "../redux/pizza/slice";
import { selectPizza } from "../redux/pizza/selectors";
import { useAppDispatch } from "../redux/store";


const Main:React.FC = () => {

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const {categoryId, sortId, currentPage, searchValue} = useSelector(selectFilter);
  const {items, status} = useSelector(selectPizza);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const valuesSorting = ['rating', 'price&order=asc', 'price&order=desc', 'title&order=asc', 'title&order=desc'];
  const valueSort = valuesSorting[sortId];

  const onChangeCategory = (id:number) => {
    dispatch(setCategoryId(id))
  }

  useEffect(() => {
    type FilterParams = {
      searchValue: string,
      categoryId: number,
      sortId:number,
      currentPage:number,
    };

    if(window.location.search){

      const params = qs.parse(window.location.search.substring(1));

      const sortId = valuesSorting.findIndex((str) => {

        return str === params.sort;
      });

      delete Object.assign(params, {sortId}).sort;
      const p  = ({...params} as unknown) as FilterParams
      dispatch(
        setFilters({
          ...p,

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
    <m.div
    initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.75}}
    className="container">
    <div className="content__top">
        <Categories category={categoryId} onClickCategory={onChangeCategory} />
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <m.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.75, ease:"easeOut"}}
      className="content__items">
        {status === 'loading'
        ? [...new Array(4)].map((_, id) => <PizzaSkeleton key={id}/>)
        : items.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)}
      </m.div>
      <Pagination/>
    </m.div>
  )
};

export default Main;
