//delpoyed here-->
// Project Console: https://console.firebase.google.com/project/challenge-7ffc6/overview
// Hosting URL: https://challenge-7ffc6.web.app


import {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise=loadStripe("pk_test_51MUN8NSJ2f42CVyYSx9fPV8OJ6VAO5hYeGVJnU88CRfDxl3vALYzVTR9gRHkYzgyKrSJrnlySH8ty70v8ZokGc6N00HAxLuhXi");


function App() {
  const [{basket,user},dispatch]=useStateValue();
   useEffect(() =>{
        auth.onAuthStateChanged(authUser=>{
          console.log('THE USER IS >>>>',authUser);
         
          if (authUser){
             dispatch({
              type:'SET_USER',
              user: authUser
             })
          }else{
             dispatch({
              type:'SET_USER',
              user:null
             })
          }
        })
   },[])

  return (
    <Router>
    <div className="App">
    
    
    <Routes>
      <Route path="/" element={<div><Header/><Home/></div> }/>
      <Route path="/orders" element={<div><Header/> <Orders/></div> }/>
      <Route path="/checkout" element={<div><Header/><Checkout/></div> }/>
      <Route path="/login" element={<Login/> }/>
      <Route path="/payment" element={<div><Header/>
      
         
         <Elements stripe={promise}>
              <Payment />
         </Elements>
         
         </div>}/>
    </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
