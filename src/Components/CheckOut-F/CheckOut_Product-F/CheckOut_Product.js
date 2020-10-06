import React from 'react';
import './CheckOut_Product.css';
import StarIcon from '@material-ui/icons/Star';
import{useStateValue} from '../../../StateProvider'

function CheckOut_Product({id, title, price, img, rating, hideButton}) {
    const [{basket}, dispatch]= useStateValue();


    const removeItemfromCart=()=>{
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
        
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={img}/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title" >{title}</p>
                <p className="checkoutProduct_Price"><strong>$</strong><strong>{price}</strong></p>
                <div className="checkoutProduct_rating">
                  {Array(rating).fill().map((_,i)=>(
                        <StarIcon style={{color:'gold'}}/>
                 ))}
                 </div>
                 {/* ONLY RENDER THIS BUTTON IF ITS NOT HIDDEN */}
                 {!hideButton && (<button onClick={removeItemfromCart}>Remove from Cart</button>) }      
        </div>
        
        </div>
    )
}

export default CheckOut_Product;
