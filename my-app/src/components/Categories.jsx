import { useState } from "react";

export default function Categories({category, onClickCategory}){
  const pizzaCategories = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"];
  return (
    <div className="categories">
    <ul>
      {pizzaCategories.map((categoryName, index)=> {
        return <li key={index} onClick={()=> onClickCategory(index)} className={category === index ? "active" : ""}>{categoryName}</li>
      })}
    </ul>
  </div>
  )
}
