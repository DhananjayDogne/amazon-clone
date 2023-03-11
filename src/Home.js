import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home(){
    return (
        <div className="home">
         
            <div className="home_container">
                <img className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/UK_COVID19_Prime_FT_XSite_HeroTALL_1500x600._CB419556475_.jpg"
                alt="not found"/>
                <div className="home_row">
                <Product id="1" title="Book for all" price={40} image="https://th.bing.com/th/id/OIP.hH_4GOsGCoCqQBwCc-5J7wHaLS?w=125&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                   rating={4}/>
                    <Product id="2" title="Book for all reader and smart persons" price={40.4} image="https://th.bing.com/th/id/OIP.hH_4GOsGCoCqQBwCc-5J7wHaLS?w=125&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                   rating={3}/>
                </div>
                <div className="home_row">
                <Product id="3" title="Book for all reader" price={40.4} image="https://th.bing.com/th/id/OIP.hH_4GOsGCoCqQBwCc-5J7wHaLS?w=125&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                   rating={3}/>
                 <Product id="4"  title="Book for all ages" price={200.4} image="https://th.bing.com/th/id/OIP.hH_4GOsGCoCqQBwCc-5J7wHaLS?w=125&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                   rating={2}/>
                <Product id="5" title="It's not a book,but secrete store of a child" price={60.4} image="https://th.bing.com/th/id/OIP.hH_4GOsGCoCqQBwCc-5J7wHaLS?w=125&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                   rating={4}/>
                </div>
                <div className="home_row">
                <Product id="6" title="To learn startup key to all starup is to find new interest of people" price={10.4} image="https://th.bing.com/th/id/OIP.hH_4GOsGCoCqQBwCc-5J7wHaLS?w=125&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                   rating={5}/>
                </div>
            </div>

        </div>
    )
}
export default Home;