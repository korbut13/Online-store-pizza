import { useDispatch } from "react-redux";
import {setCurrentPage} from '../redux/filters/slice';
import { motion as m} from "framer-motion"

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
        return <m.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={index}
          onClick={()=> {
          onClickCategory(index);
          dispatch(setCurrentPage(1))
        }}
          className={category === index ? "active" : ""}>{categoryName}</m.li>
      })}
    </ul>
  </div>
  )
};

export default Categories;
