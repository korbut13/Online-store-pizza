import { Link } from "react-router-dom";
import {motion as m} from "framer-motion";

import cartEmptyImg from '../assets/img/empty-cart.png'

const CartEmpty:React.FC = () => {
  return(
    <m.div
      initial={{x:"100%"}}
      animate={{x:"0%"}}
      transition={{duration:0.3, ease:"easeOut"}}
      exit={{opacity:0}}
     className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </m.div>
  )
};

export default CartEmpty;
