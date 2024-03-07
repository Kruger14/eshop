import all_product from '../components/assets/all_product';
import Card from '../components/card/Card';
import './css/shopcategory.css';

const ShopCategory = (props) => {



    return (
        <div className='ShopCategory-products'>
            {all_product.map((item, i) => {
                if (props.category === item.category) {
                    return <Card key={item.id} all_product={item} />
                }
                else {
                    return null;
                }
            })}
        </div>
    )
}

export default ShopCategory