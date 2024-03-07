import './footer.css';
import Facebook from '../assets/fbicon.png';
import Instagram from '../assets/igicon.png';
import Twitter from '../assets/twittericon.png';
import Whatsapp from '../assets/waicon.png';
const Footer = () => {
    return (
        <div className='footer-wrapper'>

            <div className='About'>
                <h2>About E-KArt</h2>
                <div className='inner'>
                    <p>Our products are inspired by the people and world around us.<br />
                        © 2023 E-KArt. All Rights Reserved. Designed & Developed by E-KArt Team.</p>
                </div>
            </div>

            <div className="shop">
                <h2>Shop</h2>
                <div className='inner'>
                    <li>All Products</li>
                    <li>Contact</li>
                </div>
            </div>

            <div className="connect-us">
                <h2>Connect </h2>
                <div className='icons'>
                    <img src={Facebook} alt='fb' />
                    <img src={Instagram} alt='fb' />
                    <img src={Twitter} alt='fb' />
                    <img src={Whatsapp} alt='fb' />
                </div>
            </div>

            <div className="quick-links">
                <h2>Quick links</h2>
                <div className='inner'>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Shipping Policy</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
export default Footer;