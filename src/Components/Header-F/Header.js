import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; Other basket icon option
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider';
import {auth} from '../../firebase'

function Header() {
    //BEM Naming style 

    const handleAuthentication=()=>{
        //if user is signed in then onclick sign out()
        if(user){
            auth.signOut();
        }
    }

    const [{basket, user}] = useStateValue()//Pull in the item count from the App UseState values from one component to another

    return (
        <div className="header">
            <Link to= "/"> <img  className="header_logo" /*--->pngimg.com IMPORTANT site for company LOGOS<---*/
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            /></Link>

            <div className="header_search">
                <input className="header_searchInput" type="text"/> <SearchIcon className="header_searchIcon"/>
                {/*Logo */}
            </div>

            <div className="header_nav">  
            <Link className="the_link" to={!user && '/login'}> {/* if there was no user only then we jump/redirect  to the login page */}
                <div onClick={handleAuthentication} className="header_option">
                     <span className="header_optionlin_1">
                        Welcome {!user?'Guest' : user.email}
                     </span>

                     <span className="header_optionlin_2">
                        {user ? 'Sign Out': 'Sign In'}
                     </span>
                </div>
             </Link>
             <Link className="the_link" to="/orders">
             <div className="header_option">
                <span className="header_optionlin_1">
                        Returns
                    </span>
                <span className="header_optionlin_2">
                        & Orders
                    </span>
                </div>
             </Link>
                <div className="header_option">
                <span className="header_optionlin_1">
                        Your
                    </span>   
                    <span className="header_optionlin_2">
                        Prime
                    </span>
                </div>
                <Link className="the_link" to="/checkout">  <div className="header_optionbasket">
                     <ShoppingBasketIcon/>
    <span className="header_optionlin_2 header_BasketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Header
