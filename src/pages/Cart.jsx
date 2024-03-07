import React, { useEffect, useState } from 'react';
import './css/cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { Remcart, updateCart } from '../cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [price, setPrice] = useState(0);

    const handlerem = (id) => {
        dispatch(Remcart(id));
    }


    const incorder = (item, increment) => {
        if (cartItems.find((pr) => pr.id === item.id)) {
            const eindex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
            var tempItems = [...cartItems];
            if (increment) {
                tempItems[eindex] = { ...item, order: item.order + 1 };
                console.log(tempItems)
            } else if (item.order > 1) {
                tempItems[eindex] = { ...item, order: item.order - 1 };
            }
        }
        dispatch(updateCart(tempItems));
    };

    useEffect(() => {
        const totalPrice = cartItems.reduce((total, item) => total + (item.new_price * item.order), 0);
        setPrice(totalPrice);
    }, [cartItems]);

    return (
        <>
            <div className='price'><h3>Total Price: ${price}</h3></div>
            <div className='cart'>
                {cartItems.map((item) => (
                    <div className="carditem" key={item.id}>
                        <div className="card-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="card-footer">
                            <span className="text-title">{item.name}</span>
                            <div className='prices'>
                                <div className='old_price'>
                                    ${item.old_price}
                                </div>
                                <div className='new_price'>
                                    ${item.new_price}
                                </div>
                            </div>
                            <p>Quantity: {item.order}</p>
                            <div className='btn'>
                                <button id='click' onClick={() => incorder(item, true)}>+</button>
                                <button id='click' onClick={() => incorder(item, false)}>-</button>
                            </div>
                            <div className='removebtn'>
                                <button id='click' onClick={() => handlerem(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cart;