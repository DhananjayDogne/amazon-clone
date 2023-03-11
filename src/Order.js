import React,{useState,useEffect} from 'react';
import "./order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";


function Order({order}){
    
    

    return (
        <div className="order">
           <h1>Your Orders</h1>
           <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
           </p>
           <p className="order_id">
               <small>{order.id}</small>
           </p>
           {order.data.basket?.map((item,i)=>(
            <CheckoutProduct 
                    
            key={i}
           id={item.id}
           title={item.title}
           image={item.image}
           price={item.price}
           rating={item.rating}
           hidebutton
           />
           ))}
            <CurrencyFormat
                        renderText={(value)=>(
                           
                            <h3 className='order_total'>
                                Order Totals : <strong >{value}</strong>
                            </h3>
                           
                        )}
                        decimalScale={2}
                        value={order.data.amount/100}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                         />

        </div>
    )
}
export default Order;