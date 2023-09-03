import { useDispatch } from "react-redux";
import {setCurrentPage} from '../redux/slices/filterSlice'

export default function Categories({category, onClickCategory}){
  const pizzaCategories = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"];

  const dispatch = useDispatch();
  return (
    <div className="categories">
    <ul>
      {pizzaCategories.map((categoryName, index)=> {
        return <li key={index} onClick={()=> {
          onClickCategory(index);
          dispatch(setCurrentPage(1))
        }}
          className={category === index ? "active" : ""}>{categoryName}</li>
      })}
    </ul>
  </div>
  )
}
