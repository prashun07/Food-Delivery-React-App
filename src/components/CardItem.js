import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React from "react";

function CardItem({name, imgSrc,qty, price }) {
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
                <RemoveRounded />
                <AddRounded />
            </div>
        </div>
      </div>
      <div className="itemPrice">
        <span className="dolorSign">$</span>
        <span className="itemPriceValue">{price}</span>
      </div>
    </div>
  );
}

export default CardItem;
