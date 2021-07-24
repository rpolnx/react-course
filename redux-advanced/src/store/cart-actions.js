import axios from "axios";
import { showNotification } from "./ui-slice";
import { replaceCart } from "./cart-slice";

const handleNotification = (dispatch, { status, title, message }) => {
  dispatch(showNotification({ status, title, message }));

  setTimeout(() => {
    dispatch(showNotification(null));
  }, 2000);
};

// Thunk - action creator
// Prepared for receive objects and return promises
export const sendCartData = (cartData) => {
  return async (dispatch) => {
    handleNotification(dispatch, {
      status: "pending",
      title: "Sending...",
      message: "Sending cart data",
    });

    try {
      await axios.put(
        "https://directed-sonar-319605-default-rtdb.firebaseio.com/cart.json",
        {items: cartData.items, totalQuantity: cartData.totalQuantity}
      );
    } catch (e) {
      handleNotification(dispatch, {
        status: "error",
        title: "Error!",
        message: e.message,
      });
      return;
    }

    handleNotification(dispatch, {
      status: "success",
      title: "Success!",
      message: "Sent cart data successfully!",
    });
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const data = await handleRequest();

    if (!data) {
      return;
    }

    dispatch(replaceCart({
        items: data.items || [], totalQuantity: data.totalQuantity
    }));

    handleNotification(dispatch, {
      status: "success",
      title: "Success!",
      message: "Get cart data successfully!",
    });
  };
};

const handleRequest = async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://directed-sonar-319605-default-rtdb.firebaseio.com/cart.json"
    );

    return data;
  } catch (e) {
    handleNotification(dispatch, {
      status: "error",
      title: "Error!",
      message: e.message,
    });
    return;
  }
};
