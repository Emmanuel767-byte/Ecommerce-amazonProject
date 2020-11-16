import React from 'react'
import './Home.css'
import Product from './Product-F/Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'react-bootstrap';

function Home({data}) {
    // if (data) {
    //     var sliderProducts = data.map((product)=>{
    //     var SliderImg ="GET_ITstoreImages/" + product.image;
    //     var title= product.title;
    //     var price = product.price;
    //     var rating = product.rating;
    //     return 
    //<Product
    // key={product.id}
    // id={product.id}
    // title={product.title}
    // img={SliderImg}
    // price={product.price}
    // rating={product.rating}
    // slider/>
        
    // })
    // return sliderProducts
    // }
 
    var settings = {

        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1216,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              dots: false,
              arrows: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              initialSlide: 1,
              dots: false,
              arrows: true,
            }
          },
          {
            breakpoint: 848,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 1,
              arrows: true,
            }
          },      
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: true,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              arrows: true,
            }
          },
        ]
      };
    
    return (
        <div className="home">
            <div className="home_container">
                    <div className="page-slider">
                    <h1 className="slider-title">Trending Items</h1>
                        <i  class="fas fa-chevron-left prev"></i>
                        <i class="fas fa-chevron-right next"></i>                   
                       <Slider className="slider" {...settings}>
                            {data.map(product=>(
                                <>
                                <Product
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                img={"GET_ITstoreImages/" + product.Sliderimg}
                                price={product.price}
                                rating={product.rating}
                                slider/>
                                
                                </>
                            ))}                                                 
                       </Slider>
                    </div>
                    <img className="home_image" src="https://hbr.org/resources/images/article_assets/2018/05/may18_14_696675078.jpg" alt="" />
                        <div className="home_row_cntnr">
                        <div className="home_row">
                        {/*Product*/} {/*Product*/}
                            <Product 
                            id="526df95"
                            title ="The Great Gatsby"
                            price={22.99}
                            img="https://th.bing.com/th/id/OIP.FYSfwwx4fwuDCLwCc7lZHgAAAA?w=172&h=255&c=7&o=5&pid=1.7"
                            rating={5}
                            /> <Product
                            id="15vbn5"
                            title ="RadioShack Vzoom Blender"
                            price={99.99}
                            img="https://kitchengearpro.com/wp-content/uploads/2016/11/KitchenAid-K400-Blender.jpg"
                            rating={2}
                            />
                            <Product
                            id="526df95"
                            title ="PlayStation 5 PS5"
                            price={499.99}
                            img="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/04/PS5-Console-White-Mockup.jpg"
                            rating={5}/>
                            </div>
                                <div className="home_row">
                                        {/*Product*/} {/*Product*/} {/*Product*/}
                            <Product
                            id="526df95"
                            title ="Jordan Retro"
                            price={79.99}
                            img="https://th.bing.com/th/id/OIP.1CMszUXN8Yh0LoHRgkNwOgHaFj?w=271&h=203&c=7&o=5&pid=1.7"
                            rating={3}/> 
                            <Product
                            id="526df95"
                            title ="Home Closet"
                            price={100}
                            img="https://th.bing.com/th/id/OIP.M5mYdbz67CZhrjXwhG3S9QHaHa?pid=Api&rs=1"
                            rating={4}/>
                            <Product
                            price={30}
                            title="Joggers"
                            rating={4}
                            id="5fiy62"
                            img="https://th.bing.com/th/id/OIP.WwbSHEtFr5bljJZG0KDT3AHaLH?pid=Api&rs=1"/>   
                            </div>
                            <div className="home_row">
                        {/*Product Extra Large*/}
                       <Product
                            lg
                            id="526df95"
                            title ="Gaming Consoles"
                            price={699.99}
                            img="https://i.ytimg.com/vi/G0Y9bZ2ShN8/maxresdefault.jpg"
                            rating={5}/>
                    </div>

                    <div className="home_row">
                            <Product
                            price={480}
                            title="Iphone SE 2020"
                            rating={5}
                            id="5f2d6v"
                            img="https://th.bing.com/th/id/OIP.c5gNI2NkI6GiW6ajXxapSQHaE8?w=269&h=180&c=7&o=5&pid=1.7"/>
                            <Product
                            price={380}
                            title="REDMI Laptop 2019"
                            rating={3}
                            id="5fx8h5"
                            img="https://dealdaddy.shop/wp-content/uploads/Xiaomi-RedmiBook-14inch-Laptop-Cyber-Monday-Best-Deals-2020.jpg"/>
                            <Product
                            price={45}
                            title="Chardanae poison"
                            rating={5}
                            id="4fsf6v"
                            img="https://images.gulfnews.com/201903/perfume%20shumukh_resources1.jpg"/>
                                    
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default Home
