import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useState } from 'react'

function ItemCard({itemId,imgSrc,name,rating,price}) {
const [isFavourite, setisFavourite] = useState(false);
const [currentValue, setcurrentValue] = useState(Math.floor(rating))
const handleClick=(value)=>{
 setcurrentValue(value);
}
  return (
    <div className="itemCard" id={itemId}>
        <div className={`isFavourite ${isFavourite?"active":""}`} onClick={()=>setisFavourite(!isFavourite)}>
          <Favorite />
        </div>
        <div className="imgBox">
          <img src={imgSrc} alt="" className="itemImg"/>
        </div>
        <div className="itemContent">
          <h3 className="itemName">{name}</h3>
          <div className="bottom">
            <div className="rating">
              { Array.apply(null,{length:5}).map((e,i)=>(
                <i key={i} className={`rating ${currentValue>i? "orange":"gray"}`} onClick={()=>handleClick(i+1)}>
                  <StarRounded />
                </i>
              )) }
               <div className="price"><span>${price}</span></div>
            </div>
            <i className="addToCart">
              <AddRounded />
            </i>
           
          </div>
        </div>
    </div>
  )
}

export default ItemCard