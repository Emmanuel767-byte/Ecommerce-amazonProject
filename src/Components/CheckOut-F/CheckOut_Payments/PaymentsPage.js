import React,{useState, useEffect} from 'react';
import './PaymentsPage.css';
import {Link, useHistory} from "react-router-dom"
import CheckOut_Product from '../CheckOut_Product-F/CheckOut_Product'
import Header from '../../Header-F/Header';
import {useStateValue} from '../../../StateProvider';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from "../../../reducer";
import {db} from "../../../firebase"
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import axios from "../../../AXIOS.js";

function PaymentsPage() {
    const history =useHistory();
    const [{basket, user}, dispatch] = useStateValue();
    const stripe= useStripe();
    const Stripe_elements = useElements();
    const [processing, setProcessing]= useState("");
    const [succeeded, setSucceeded]=useState(false)
    const [error, setError]= useState(null);// handle an error
    const [disabled, setDisabled]=useState(true);
    const [clientSecret, setClientSecret]=useState(false);

    //whenever basket changes it will make thIS post request and UPDATE the special_stripe secret which allows us to charge the customer the correct amount
    useEffect(() => {
        //AXIOS is a fetch library  that making fetch/POST/GET request and dealing with API's easier
     // Generate the special stripe secret which allows us to charge customers
    
     const Get_ClientSecret = async ()=>{
        const resp= await axios({
            method: "POST",
            //Stripe expects the total in a currencies subunits example : $10 is 10,000units and $1 is 100 units
            url: `/payments/create?total=${getBasketTotal(basket) *100}`//{*100} for subunits //$1 is 100units
          })
          setClientSecret(resp.data.clientSecret)
     }
    Get_ClientSecret()
    }, [basket])

    

    const handleSubmit= async (e)=>{
        //Do STRIPE stuff
        e.preventDefault();
        setProcessing();

        const payload= await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: Stripe_elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntent is a payment confirmation
            //if payment confirmation is successful , then do the following
            
            db.collection('users')//access firebase database "users" collections
            .doc(user?.uid)//going into *That doc *THAT specific user doc id account
            .collection('orders')//going into *THAT user database collection /their orders list
            .doc(paymentIntent.id)//acces doc id
            .set({//
                basket: basket,//
                amount: paymentIntent.amount,// price parsed in thru stripe
                created: paymentIntent.created//purchase DATE in thru stripe
            })

            setSucceeded(true);// payment wentthrough and confirmed 
            setError(null);//cuz there was No error
            setProcessing(false)// no more processing
            dispatch({
                type: 'EMPTY_BASKET' 
            })
            history.replace("/orders")//replace page replace("/orders") NOT push page {push(/orders)}
    
        })
    }
    const handleChange= (e)=>{
        //handle event changes in <CardElement/> whenn event has been Submited 
        //Listen for changes in the CardElement 
        //and display any errors as thr customer types in card details/info
       //if event (e) is empty disable it if theres an error show the error
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "");
       

    }
    return (
       <div className="paymentsPage">
            <Header/>
            <div className="paymentsPage_cntnr">
                {/* Payment section  -- Delivery address */}
                <h1>Checkout {<Link to= "/checkout">({basket?.length} items)</Link>}
                </h1>
                <div className="payments_section">
                    <div className="payments_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payments_address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles</p>
                        <span>CA</span>
                    </div>
                </div>

                {/* Payment section  -- Delivery Items  */}
                <div className="payments_section">
                    <div className="payments_title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payments_items">
                        {/* Cart basket items */}
                        {basket.map(item=>(
                <CheckOut_Product
               id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
                /> ))}

                    </div>
                </div>
                {/*Payment section  -- Delivery method */}
                <div className="payments_section">
                    <div className="payments_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payments_details">
                        {/* STRIPE magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>                       
                            <div className="payments_priceCntnr">
                                <CurrencyFormat
                                renderText={(value)=>(
                                <h3>Order Total: {value}</h3>//that value is then attatched to the {getBasketTotal(basket)}
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                {/* */}
                                <button style={{cursor:"pointer"}} disabled={processing || disabled || succeeded}>
                                    {/* span is saying if (?) its {processing} show processing , otherwise (:) show Buy Now */}
                                <span>{processing ? <p>Processing</p>: <p>Buy Now</p>}</span>
                                    </button> 

                            </div>
                                {error && <div>{error}</div>}
                                <div className="">                                    <h1 style={{fontSize:'1em'}}> Demo Payment</h1>
                                    <span style={{fontSize:'0.8em'}}>Demo Card #= 4242 4242 4242 4242.  Use any future date.</span></div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default PaymentsPage
