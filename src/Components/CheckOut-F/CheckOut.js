import React from 'react';
import './CheckOut.css';
import Subtotal from './Subtotal-F/Subtotal';
import {useStateValue}from '../../StateProvider';
import CheckOut_Product from '../CheckOut-F/CheckOut_Product-F/CheckOut_Product';
import Amazon_ad2_sqooshed from '../Logo-pics/Amazon_ad2_sqooshed.jpg'


function CheckOut() {

    const [{basket, user}] = useStateValue()  
    // img src="https://www.newsworks.org.uk/write/MediaUploads/1%20Creative/Gallery/2018/July/Amazon_ad2_1200.jpg"
    return (
        <div className="checkout">
            <div className="checkout_Left">
                <img src={Amazon_ad2_sqooshed} alt="" className="checkout_ad"/>
                <div className="underIMG_checkout">
                    <Subtotal/>
                </div>
                <div className="checkout_title"></div>
                <h2>{user?.email}</h2>
                <h2>Your Shopping Basket</h2>
                {/*Loop/map through basket and for every item return <CheckOut_Product/> component */}
                {basket.map(item=>(
                <CheckOut_Product
               id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
                /> ))}

                    {/* <CheckOut_Product/> */}
                    {/*CheckOut_Product */}
                    {/*CheckOut_Product*/}
                    {/*CheckOut_Product*/}
            
            </div>
            
                <div className="checkout_Right">
                    <Subtotal/>
                </div>

        </div>
    )
}

export default CheckOut
