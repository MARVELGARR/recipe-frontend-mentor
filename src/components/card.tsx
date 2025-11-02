import { useCart, type CartType } from "../../context/cartContext";
import type { ApiRes } from "../../utils/fetcher";

const Card = ({...prop}:ApiRes) => {


    const cart = useCart()


    const item: Omit<CartType,"quantity"> = {
        id: prop.id,
        name: prop.name,
        price: prop.price,
        thumnail: prop.image.thumbnail
        
    }

    const cart_count_per_Card = cart.cart.find((i)=>i.id==item.id)
    return (
        <li className="card_list_item">
            <div className="img_container">
                <img className="img_desktop" alt={prop.name} src={prop.image.desktop}/>
                <img className="img_tablet" alt={prop.name} src={prop.image.tablet}/>
                <img className="img_mobile" alt={prop.name} src={prop.image.mobile}/>
                {cart_count_per_Card && cart_count_per_Card?.quantity > 0 ? (

                <button className="cont_button">
                    <img onClick={()=>cart.removeItem(item.id)} alt="increment count" src={'/images/icon-decrement-quantity.svg'}/>
                    <p className="">{cart_count_per_Card ? cart_count_per_Card.quantity : "0"}</p>
                    <img onClick={()=>cart.addToCart(item)}  alt="increment count" src={'/images/icon-increment-quantity.svg'}/>
                </button>
                ) : (

                <button onClick={()=>cart.addToCart(item)}>
                    <img alt="add to cart" src={'/images/icon-add-to-cart.svg'}/>
                    <p className="">Add to Cart</p>
                </button>
                )}

            </div>
            <div className="price_container">
                <p className="">{prop.category}</p>
                <p className="name">{prop.name}</p>
                <p className="">${prop.price}</p>
            </div>
        </li>
    );
}
 
export default Card;