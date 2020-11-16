import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; Other basket icon option
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider';
import {auth} from '../../firebase';
import MiniNavBurger from '../MIniNav/MiniNavBurger.jsx'



function Header() {
    //BEM Naming style 

//     // webpack.config.js
// var webpack = require('webpack')

// module.exports =  {
//   plugins: [
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery',
//       IScroll: 'iscroll',
//     }),
//   ],
// }

// // your-project.js
// var IScroll = require('iscroll');
// var $ = require('jquery');
// require('jquery-drawer');

// $('.drawer').drawer();



    // HAMBURGAR NAVBAR
// const mini_nav = (<div class="drawer drawer--right">
// <header role="banner">
//   <button type="button" class="drawer-toggle drawer-hamburger">
//     <span class="sr-only">toggle navigation</span>
//     <span class="drawer-hamburger-icon"></span>
//   </button>
//   <nav class="drawer-nav" role="navigation">
//     <ul class="drawer-menu">
//       <Link class="drawer-brand" >Brand</Link>
//      <Link class="drawer-menu-item"  to={{/*!user*/} && '/login'}>Sign In</Link>
//      <Link class="drawer-menu-item"  to="/orders"  >Your Orders </Link>
//       <Link class="drawer-menu-item" to="/checkout" >Check Out</Link>
//       <Link class="drawer-menu-item" href="#">Nav2</Link>
//     </ul>
//   </nav>
// </header>
    
// </div>)

    const handleAuthentication=()=>{
        //if user is signed in then onclick sign out()
        if(user){
            auth.signOut();
        }
    }

    const [{basket, user}] = useStateValue()//Pull in the item count from the App UseState values from one component to another

    return (
        <div className="header">
            <Link id="header_logo" to= "/"> <img  className="header_logo" /*--->pngimg.com IMPORTANT site for company LOGOS<---*/
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="#"/></Link>

            <div className="header_search">
                <input className="header_searchInput" type="text"/> <SearchIcon className="header_searchIcon"/>
                {/*Logo */}
            </div>

            <div className="header_nav">  
            <Link className="nav_link" to={!user && '/login'}> {/* if there was no user only then we jump/redirect  to the login page */}
                <div onClick={handleAuthentication} className="header_option">
                     <span className="header_optionlin_1">
                        Welcome {!user?'Guest' : user.email}
                     </span>

                     <span className="header_optionlin_2">
                        {user ? 'Sign Out': 'Sign In'}
                     </span>
                </div>
             </Link>
             <Link className="nav_link" to="/orders">
             <div className="header_option">
                <span className="header_optionlin_1">
                        Returns
                    </span>
                <span className="header_optionlin_2">
                        & Orders
                    </span>
                </div>
             </Link>
                <div className="header_option nav_link">
                <span className="header_optionlin_1">
                        Your
                    </span>   
                    <span className="header_optionlin_2">
                        Prime
                    </span>
                </div>
                <Link className="nav_link" to="/checkout">  <div className="header_optionbasket">
                     <ShoppingBasketIcon/>
                    <span className="header_optionlin_2 header_BasketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>   
            <MiniNavBurger/>
        </div>
    )
}

export default Header
