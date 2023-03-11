import React,{useState,useEffect} from 'react';
import "./Payment.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import {Link,useNavigate} from "react-router-dom";
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from "./reducer";
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import {db} from './firebase';
// import

function Payment(){
    const navigate=useNavigate();
    const [{basket,user},dispatch]=useStateValue();
   

    const stripe=useStripe();
    const element=useElements();

    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);

    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState(false);
    const [clientSecret,setClientSecret]=useState(null);
    // const [,setClientSecret]=useState(null);

    useEffect(()=>{
         //client secret

         const getClientSecret=async ()=>{
            const response=await axios({
                method:'post',
                //stripe expect the total in a currencies submit
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
         }
 
         getClientSecret();
    },[basket])

    console.log("The secrete is >>>>",clientSecret)

    const handleSubmit=async (event)=>{
              event.preventDefault();
              setProcessing(true);

              const payload=await stripe.confirmCardPayment(clientSecret,{
                payment_method:{
                    card: element.getElement(CardElement)
                }
              }).then(({paymentIntent})=>{
                //payment confirmend

                db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                })



                setSucceeded(true);
                setError(false);
                setProcessing(false);


                dispatch({
                    type:'EMPTY_BASKET'
                })

                navigate('/orders')
              })
    }

    const handleChange=e=>{
         //listen for changes in cardelement
         //and display any error as the customer types their card details
         setDisabled(e.empty);
         setError(e.error ? e.error.message :"");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    CheckOut{
                        <Link to='/checkout'> ({basket?.length} items)</Link>
                    }
                </h1>
            </div>
            <div className="payment_section">
                <div className="payment_title"><h3>Delivery Address</h3></div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Lose angels</p>
                    
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map(item=>
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                        )}
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>

                <div className='payment_details'>
                   <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className='payment_priceContainer'>
                    <CurrencyFormat
                        renderText={(value)=>(
                           
                            <h3>
                                Order Totals : <strong>{value}</strong>
                            </h3>
                           
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                         />

                         <button disabled={
                            processing || disabled || succeeded
                             }
                             
                             ><span>{processing ? <p>Processing</p> : "Buy Now"}</span></button>
                        
                    </div>
                    {error && <div>{error}</div>}
                   </form>
                </div>
            </div>
            </div>
        
    )
}
export default Payment;