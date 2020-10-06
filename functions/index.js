const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe= require("stripe")('sk_test_51HW1tLDfSH9fb1l5CJlswPcgRqCc8rEAqNcGb9QUyLgZv0pC9ekgXLGY9v68kT4mXctYH76zGUN1KKO8Q4rTXeg2000KtSvCLS')//Secret key

//We need the following below in order to set an API here


//APP CONFIG
const app = express();



//MIDDLEWARES
app.use(cors({origin: true}));
app.use(express.json());


//API ROUTES
//make a dummy route to test out first
app.get('/', (req,resp)=> resp.status(200).send('hello world'))

//SEE PaymentsPage in Checkouts Folder in Src  (front end)Folder
app.post('/payments/create',async (req,resp)=>{
    const total = req.query.total;// access thequery parameter ?("/payments/create?total") in PaymentsPage {Get_ClientSecret()} function as a var

    console.log('received payment total BOOM>>>', total)

    const PaymentIntent= await stripe.paymentIntents.create({
        amount: total, // SubUnits of currency
        currency: "usd",
    })

    resp.status(201).send({
        clientSecret: PaymentIntent.client_secret,//yes client_secret NOT clientSecret 
    })

})



//LISTENING COMMAND
exports.api=functions.https.onRequest(app)

//Example Endpoint
//Local API end point >> http://localhost:5001/first-ecommerce-site/us-central1/api









// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
