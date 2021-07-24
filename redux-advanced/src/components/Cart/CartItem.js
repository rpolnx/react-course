import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";

import { addItemToCart, removeItemFromCart } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const handleItemRemotion = () => {
    dispatch(removeItemFromCart(id));
  };
  const handleItemAddition = () => {
    dispatch(addItemToCart({ id, price, name: title }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleItemRemotion}>-</button>
          <button onClick={handleItemAddition}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
