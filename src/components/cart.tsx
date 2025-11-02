import { useCart } from "../../context/cartContext";

const Cart = () => {


    const {cart} = useCart()
    return (
        <div className="cart">
            <h1 className="">Your Cart {`(${cart.length})`}</h1>
            <section className="">
                <ul className="">
                    {cart.map((cartItem)=>{
                        return (
                            <li key={cartItem.id} className="">
                                <div className="">
                                    <p className="">{cartItem.name}</p>
                                </div>
                                <div className="">
                                    {`${cartItem.quantity}x`} {`@${cartItem.price}`} <span className="">{`${cartItem.quantity * cartItem.price}`}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    );
}
 
export default Cart;