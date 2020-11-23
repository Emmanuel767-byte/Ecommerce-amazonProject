import React from 'react'
import './Order_component.css';
import moment from "moment";
import CurrencyFormat from 'react-currency-format';
import CheckOut_Product from "../../CheckOut-F/CheckOut_Product-F/CheckOut_Product"

function Order({order}) {
    return (
        <div className="order">
         <h2>Order</h2>  
            {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}        
            <p className="order_id">
                <small>Order ID : {order.id}</small>
            </p>
            {order.data.basket?.map(item=>(
              <CheckOut_Product
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
                hideButton
               />   
            ))}
<CurrencyFormat
            renderText={(value)=>(
                <>
                <h3 className="order_total">Order Total:{value}</h3>
                </>
            )}
            decimalScale={2}
            value={order.data.amount/100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />   
        </div>
    )
}

export default Order
 