import React from 'react';
import './Header.css' ;
import {Link} from 'react-router-dom'
import {Search as SearchIcon ,ShoppingBasket} from "@mui/icons-material";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header(){

    const [{basket,user},dispatch]=useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
           <Link to={'/'}>
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon
                className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                < Link to={!user && '/login'}>
                <div 
                onClick={handleAuthentication}
                className="header_option">
                    <span className="header_optionLineOne">
                        
                        {user ? (user.email):("Guest")}
                    </span>
                    
                    <span className="header_optionLineTwo">
                        {user?"Sign Out":"Sign In"}
                    </span>
                </div>
                </Link>
                <Link to="/orders">
                <div className="header_option">
                <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                </Link>
                <div className="header_option">
                <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
               < Link to='/checkout'>
                <div className="header_optionBasket">
                      <ShoppingBasket/>
                      <span className="header_optionLineTwo header_BasketCout">
                         {basket?.length}
                      </span>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;
