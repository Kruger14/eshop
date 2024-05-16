import './card.css';
import { Link } from 'react-router-dom';
import { Addtocart, Remcart } from '../../cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const Card = (props) => {
    var cartItems = useSelector(state => state.cart.items);
    var items = cartItems;
    const dispatch = useDispatch();

    const handleadd = (item, items) => {
        const test = items.map((newItem) => newItem.id === item.id); //array of boolean values
        const testR = test.every((t) => t === false); //checks every value in array satidfies the condition or not
        if (testR) {
            dispatch(Addtocart(props.all_product));
        } else {
            alert("item exist")
        }
    };

    const handlerem = (id) => {
        dispatch(Remcart(props.all_product.id))
    }


    return (
        <div className="card">
            <Link to={`/product/${props.all_product.id}`} >
                <div className="card-img">
                    <img src={props.all_product.image} alt='' />
                </div>
            </Link>

            <div className="cardfooter">
                <span className="text-title">{props.all_product.name}</span>

                <div className='newprice'>
                    <div className='old_price'>
                        ${props.all_product.old_price}
                    </div>
                    <div className='new_price'>
                        ${props.all_product.new_price}
                    </div>
                </div>

                <div className='container-btns'>
                    <button className='button' onClick={() => handleadd(props.all_product, items)}>Add</button>
                    <button className='button' onClick={() => handlerem(props.id)}>Remove</button>
                </div>
            </div>
        </div >
    );
};

export default Card;
