import './navbar.css';
import Logo from '../assets/Ecomlogo.jpg';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import All_product from '../assets/all_product';
import Card from '../../components/card/Card';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleSearch = () => {
    const searchResult = All_product.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setResult(searchResult);
    console.log(searchResult)
  };

  return (
    <div className='navbarContainer'>
      <div className='logoContainer'>
        <img src={Logo} alt='logo' />
      </div>

      <div className="searchcontainer">
        <div className="combiner">
          <input type='search' value={searchQuery} onChange={handleChange} />
          <IoIosSearch id='search' onClick={handleSearch} />
        </div>
        {searchQuery && (
          <div className='finder'>
            {result.map((item) => (
              <Card key={item.id} all_product={item} />
            ))}
          </div>
        )}
      </div>

      <div className='pageLink'>
        <ul>
          <li><Link to='/'>Shop</Link></li>
          <li><Link to='/men'>Men</Link></li>
          <li><Link to='/womens'>Women</Link></li>
          <li><Link to='/kids'>Kids</Link></li>
        </ul>
      </div>

      <div className='login-btn'>
        <h3><Link to='/login'>Log-in</Link></h3>
      </div>

      <div className="cart">
        <div className="cartcontainer">
          <span id='cartnum'>{cartItems.length}</span>
          <Link to={'/Cart'}><FaShoppingCart id='cartsvg' /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
