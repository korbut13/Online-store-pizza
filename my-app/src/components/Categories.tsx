import { useDispatch } from "react-redux";
import {setCurrentPage} from '../redux/slices/filterSlice';

type CategoriesProps = {
  category:number;
  onClickCategory: (index:number) => void;
}

const Categories:React.FC<CategoriesProps> = ({category, onClickCategory}) => {
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
};

export default Categories;
