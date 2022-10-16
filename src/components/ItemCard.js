import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Items } from "./Data";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
let cartData = [];

function ItemCard({ itemId, imgSrc, name, price,rating }) {
  const [isFavourite, setisFavourite] = useState(false);
  const [currentValue, setcurrentValue] = useState(Math.floor(rating));
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(null);

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      // console.log(cartData);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  const handleClick=(value)=>{
    setcurrentValue(value);
  };
  function setCartOnClick(){
   setCart(Items.find((n) => n.id === itemId));
  //  console.log(isCart);
   
  };
  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setisFavourite(!isFavourite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="rating">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>${price}</span>
            </h3>
          </div>
          <i
            className="addToCart"
            onClick={() => {
             setCartOnClick()
            }}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
