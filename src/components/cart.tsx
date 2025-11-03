import { useCart } from "../../context/cartContext";

const Cart = () => {


    const {cart, removeItem_Id} = useCart()



    const TotalItemQuntity = cart.map((i)=>i.price * i.quantity)
    const totalPrice =TotalItemQuntity.reduce((Vaccumulatorlue, currentValue)=>{
                        return Vaccumulatorlue + currentValue
                    },0)

    return (
        <div className="cart">
            <h1 className="">Your Cart {`(${cart.length})`}</h1>
            {cart.length > 0 ? (<section className="">
                <ul className="">
                    {cart.map((cartItem)=>{
                        return (
                            <li key={cartItem.id} className="">
                                <div className="">

                                    <div className="">
                                        <p className="">{cartItem.name}</p>
                                    </div>
                                    <div className="price_cal">
                                       <span className="">{`${cartItem.quantity}x`}</span> <span className="">{`@ $${cartItem.price}`}</span>   <span className="">{`${cartItem.quantity * cartItem.price}`}</span>
                                    </div>
                                </div>
                                <img onClick={()=>removeItem_Id(cartItem.id)} src="/images/icon-remove-item.svg" alt="remove item" />
                            </li>
                        )
                    })}
                </ul>
                <div className="order_total">
                    <div className="">Order Total</div>
                    <strong>${totalPrice}</strong>
                </div>
                <button className="">Confirm Order</button>
            </section>): (
                <div className="icon">
                    <img src="/images/illustration-empty-cart.svg" alt="empty cart icon" />
                    <p className="">Your added items will appear here</p>
                </div>
            )}
        </div>
    );
}
 
export default Cart;