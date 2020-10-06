import React,{useEffect} from 'react';
import './App.css';
import Header from './Components/Header-F/Header';
import Home from './Components/Home-F/Home';
import CheckOut from './Components/CheckOut-F/CheckOut';
import OrdersPage from "./Components/OrdersPage-F/OrdersPage"
import LoginPage from './Components/LoginPage-F/LoginPage';
import PaymentsPage from './Components/CheckOut-F/CheckOut_Payments/PaymentsPage'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

//loads stripe up and installs it as a var/const
const Stripe_promise= loadStripe('pk_test_51HW1tLDfSH9fb1l5foD7Ubc4rqze5dHqdt7DaPpSoi1rPhBqQ4RQMF1cyRrRXCNqZJidRH5p1xplhcqv08fzqtdd003C0ZoP1l');

function App() {
  //this is used to trigger actions between compononets {const [{}, dispatch] = useStateValue();}
  const [{}, dispatch] = useStateValue();


  useEffect(()=>{
    //UseEffect will only run once when the app component loads execpt when a dependancy ([var]) is present
    // {onAuthStateChanged()} firebase listener that is always listening for whenever authentication changes(logins/log outs/ none/null)
    auth.onAuthStateChanged(AuthUser=>{
      console.log("THE USER IS>>", AuthUser);

      if (AuthUser){
        //the user just logged in/was logged in
        dispatch({// DISPATCH({}) TRIGGERS THE ACTION
          type: 'SET_USER',
          user: AuthUser,
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  },[])
  return (
    <Router>
      {/* Header */}
      <div className="App">
      {/*Different ways of using <Route/> or <Route></Route>*/}
      <Switch>
        <Route path="/orders" exact component={OrdersPage}/>
        {/* <Route path="/orders" >
          <OrdersPage/>
        </Route> */}
        <Route path="/login" exact component={LoginPage}/>
          {/*CheckOut page */}
        <Route path="/checkout">
          <Header/>
          <CheckOut/>
        </Route>
           {/* Payments page */}
        <Route path="/payments">
        <Elements stripe={Stripe_promise}>
          <PaymentsPage/>
          </Elements>
        </Route>     
        <> {/*Home Page*/}
        <Header/>
        <Route path="/" exact component={Home}/>
        </>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
