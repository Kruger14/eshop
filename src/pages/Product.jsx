import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../components/assets/all_product';
import './css/product.css';
import { useDispatch } from 'react-redux';
import { Addtocart } from '../cartSlice';

const Product = () => {
    let { id } = useParams();
    let data = all_product.find(product => product.id === Number(id));
    const dispatch = useDispatch();

    const handleadd = () => {
        dispatch(Addtocart(data));
    };

    return (
        <div className='wrapper'>
            <div className='pic'>
                <img src={data.image} alt='' className='images' />
            </div>
            <div className='left'>
                <span className="text-title">{data.name}</span>
                <h3 className='rating'>
                    <div className='prices'>
                        <div className='old_price'>
                            {data.old_price}
                        </div>
                        <div className='new_price'>
                            {data.new_price}
                        </div>
                    </div>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <p>Description: Lorem ipsum dolor sit amet...</p>
                </h3>
                <div className='btn'>
                    <button className='addbtn' onClick={handleadd}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
