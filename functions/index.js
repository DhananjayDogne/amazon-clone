const functions = require("firebase-functions");

const express=require("express");
const cors=require("cors");
const stripe=require("stripe")
('sk_test_51MUN8NSJ2f42CVyYSZhfepplDIj1IfVTRjxI52ymYu1s8ddHSzuFy3beQDfJaR0PJRBD3fTX2qkvov1sMLDJhsCp00woCBxHdm')
//API 

//App config
const app=express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API reoutes
app.get('/',(request , response)=> response.status(200).send('hello world'))


app.post('/payments/create', async (request, response)=>{
     const total =request.query.total;
     
     console.log("Payment Request Received: " ,total);

     const paymentIntent = await stripe.paymentIntents.create({
          amount:total,
          currency: "inr",
     });
     //Ok creaated ,good
     response.status(201).send({
          clientSecret:paymentIntent.client_secret,
     })
})

//Listen command
exports.api=functions.https.onRequest(app)


//example endpoint
//http://127.0.0.1:5001/challenge-7ffc6/us-central1/api

