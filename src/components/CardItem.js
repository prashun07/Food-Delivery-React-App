import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
let cardItems = [];

function CardItem({ name, imgSrc, price, itemId }) {
  const [qty, setQty] = useState(1);
  const [{ cart }, dispatch] = useStateValue();
  const [itemPrice, setitemPrice] = useState(parseInt(qty) * parseFloat(price));

  useEffect(() => {
    cardItems = cart;
    setitemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty === 1) {
        cardItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cardItems,
        });
      }
      setQty(qty - 1);
      if(qty<0){
      cardItems.pop(id);
      }
    }
  };
  return (
    <div className="cardItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQuantity("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <div className="itemPrice">
        <span className="dolorSign">$</span>
        <span className="itemPriceValue">{itemPrice}</span>
      </div>
    </div>
  );
}

export default CardItem;
