import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/ui-slice";
import { totalQuantitySelector } from "../../store/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector(totalQuantitySelector);

  const handleButton = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={handleButton}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
