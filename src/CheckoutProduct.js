import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

const CheckoutProduct=({id,title,image,price,rating,hidebutton})=>{
    const [{basket},dispatch]=useStateValue();
    
    const RemoveFromBasket=()=>{
      dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,
         
     });
    };

    return (
      <div className="CheckoutProduct">
        <img className="CheckoutProduct_image" src={image}/>
        <div className="CheckoutProduct_info">
          <p className="CheckoutProduct_title">{title}</p>
          <p className="CheckoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
          <p className="CheckoutProduct_rating">
            {Array(rating).fill().map((_,i) => (
              <p>⭐</p>
            ))}
          </p>
          {
            !hidebutton &&(
              <button onClick={RemoveFromBasket}>Remove From Basket</button>
            )
          }
          
        </div>
      </div>
    )
}

export default CheckoutProduct;