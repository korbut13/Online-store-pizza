import { useState } from "react";

export default function Categories(){
  const [activeCategory, setActiveCategory] = useState(0);
  const pizzaCategories = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"];

  return (
    <div className="categories">
    <ul>
      {pizzaCategories.map((category, index)=> {
        return <li onClick={()=> setActiveCategory(index)} className={activeCategory === index ? "active" : ""}>{category}</li>
      })}
    </ul>
  </div>
  )
}
