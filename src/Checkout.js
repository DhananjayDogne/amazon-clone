import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider.js";
import {useNavigate} from "react-router-dom";
function Checkout(){
   
    const [{basket,user},dispatch]=useStateValue();
    console.log(basket.basket);
    return (

        <div className="checkout">

            <div className="checkout_left">
                 <img 
                 className="checkout_ad"
                 src="https://images-na.ssl-images-amazon.com/images/S/abs-image-upload-na/8/AmazonStores/ATVPDKIKX0DER/5829bfdc16eebcf8d7a7f9f34b73de40.w3000.h600.jpg"
                 alt="not load"
                 />
                 <div >
                    <h3>Hello, {!user ? ("Guest"):(user?.email) }</h3>
                     <h2 className="checkout_title">Your Shopping Basket</h2>
                    
                     {basket?.map((item,i)=>{
                    //    console.log(item)

                    return (
                         <CheckoutProduct 
                    
                         key={i}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    )
                     

                    } 
                     )}
                   
                 </div>
                 
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
            
        </div>
    )
};
export default Checkout;