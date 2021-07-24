import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

import { itemsSelector } from "../../store/cart-slice";

const Cart = (props) => {
  const items = useSelector(itemsSelector);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((it) => (
          <CartItem
            key={it.itemId}
            item={{
              id: it.itemId,
              title: it.name,
              quantity: it.quantity,
              total: it.totalPrice,
              price: it.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
