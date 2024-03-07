import React from "react";
import './css/shop.css';
import Model from '../components/assets/modelhme.png';



const Shop = () => {
    return (
        <div className="shop-wrapper">
            <div className="boxcontainer">

                <div className="info">
                    <h1>Raining Offers</h1>
                    <h3>For Hot Summer!</h3>
                    <h4>25% off on all products</h4>

                    <div id="now">
                        Shop Now
                    </div>

                </div>

                <div className="banner">
                    <img src={Model} alt="" />
                </div>

            </div>
        </div >
    )
}

export default Shop