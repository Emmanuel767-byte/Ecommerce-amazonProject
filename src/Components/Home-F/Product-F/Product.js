import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import "./Product.css";
import { useStateValue } from '../../../StateProvider';


function Product({id, title, price, img, rating ,lg, slider, info}) {
    // "state" in this case is data {basket} ,"dispatch" is how we shoot the data into the data layer like a gun 
    const [{basket}, dispatch] = useStateValue();//Match item props with each other and send /attatch to
   // console.log("this is the basket >>>", basket)

    const addToBasket=()=>{
        // dispatch the item_data into the data layer
        dispatch({
            type: 'Add_To_Basket',
            item: {//Pass in and match variables
                id:id,
                title:title,
                img:img,
                price:price,
                rating: rating
            }
        }) 
    }
    return (
        <div id={`${lg &&  'lg-product'}`} className={`product ${slider && 'slider-Product'}`}>
            <div className={`product_info ${info && 'slider-info'}`}>
                    <p className="product_title">{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating"> {/*get product star ratings*/}
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon style={{color:'gold'}}/>
                    ))}
                    {/*this function maps through the array of stars and fills the array with whatever the rating number is  and renders it out*/}
                </div>
            </div>
            <img src={img} id={`${lg && "lg-product-img"}`} alt=""/>
            <button className="product_btn" onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Product;
