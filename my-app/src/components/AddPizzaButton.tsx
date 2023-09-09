import { useSelector, useDispatch } from "react-redux";

import { addItem, selectCart} from "../redux/slices/cartSlice";

type ButtonProps = {
  id: string;
  title:string;
  imageUrl: string;
  price:number;
  size:number;
  type:string;
}

const AddPizzaButton:React.FC<ButtonProps> = ({id, title, imageUrl, price, size, type}) => {
  const {items} = useSelector(selectCart);
  const dispatch = useDispatch();

  const amountPizza = () => {
    const foundPizza = items.find((item:any) => (item.id === id) && (item.size === size) && (item.type === type));
    if(foundPizza){
      return foundPizza.count;
    }else {
      return 0;
    }
  }

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type,
      size
    }
    dispatch(addItem(item));
  }

  return(
    <div
      className="pizza-block__bottom">
      <div className="pizza-block__price">от {price} ₽</div>
      <div
      onClick={onClickAdd}
      className="button button--outline button--add">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i>{amountPizza()}</i>
      </div>
    </div>
  )
};

export default AddPizzaButton;
