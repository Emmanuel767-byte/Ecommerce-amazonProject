import React, {useState, useEffect} from 'react'
import "./ordersPage.css";
import Order from "./Order_Component/Order"
import {useStateValue} from '../../StateProvider';
import {db} from "../../firebase";
import {Link} from "react-router-dom";

function OrdersPage() {
    const [orders,setOrders]= useState([])
    const [{basket, user}, dispatch] = useStateValue();//import the *user from react CONTEXT Api 
    //----ACCESS FIREBASE DATABASE------
    useEffect(() => {
        if (user) {
            db.collection('users').doc(user?.uid).collection('orders')
            .orderBy('created', 'asc')//  organize files in descending order
                .onSnapshot(snapshot=>{
                    setOrders(snapshot.docs.map(doc=>({
                    id: doc.id,
                    data: doc.data()
                })))
      })} else {
          setOrders([])
      }
    }, [user])

    return (
        <div className="ordersPg">
             <Link to="/">
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
           <h1>Your Orders</h1>
           <div className="ordersPg_list">
               {orders?.map(order=>(
                   <Order order={order}/> //order element
               ))}
           </div>
        </div>
    )
}

export default OrdersPage;
