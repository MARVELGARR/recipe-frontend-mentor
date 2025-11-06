import { useState } from "react";
import { useCart } from "../../context/cartContext";
import ConfirmDialog from "./confirm_dialog";

const Cart = () => {


    const {cart, removeItem_Id} = useCart()
    const [isDialog, setIsDialog] = useState(false)

    const handleOpen = () =>{
        setIsDialog(true)
    }
    
    const handleClose = () =>{
        console.log("dsd")
        setIsDialog(false)
    }


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
                <div className="carbon">
                    <img src="/images/icon-carbon-neutral.svg" alt="carbon-neutral" className="" />
                    <p className="">This is a <span className="">carbon-neutral</span> delivery</p>
                </div>
                <button onClick={handleOpen} className="">Confirm Order</button>
            </section>): (
                <div className="icon">
                    <img src="/images/illustration-empty-cart.svg" alt="empty cart icon" />
                    <p className="">Your added items will appear here</p>
                </div>
            )}
         {isDialog && <ConfirmDialog setIsOpen={setIsDialog} />}
        </div>
    );
}
 
export default Cart;