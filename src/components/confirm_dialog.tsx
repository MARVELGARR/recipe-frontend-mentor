import { useState } from "react";
import { useCart } from "../../context/cartContext";


type ConfirmType ={
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmDialog: React.FC<ConfirmType> = ({setIsOpen} ) => {
  const { cart, removeItem_Id } = useCart();
  const TotalItemQuntity = cart.map((i) => i.price * i.quantity);
  const totalPrice = TotalItemQuntity.reduce(
    (Vaccumulatorlue, currentValue) => {
      return Vaccumulatorlue + currentValue;
    },
    0
  );

  
  return (
    <div className="overlay inactive">
      <div className="confirm">
        <div className="confirm_mark">
          <img
          
            src="/images/icon-order-confirmed.svg"
            alt="confirm icon"
            className=""
          />
          <img onClick={() => setIsOpen(false)} src="/images/icon-remove-item.svg" alt="" className="" />
        </div>
        <div className="">
          <h1 className="">Order Confirmed</h1>
          <p className="">We hope you enjoy yiur food</p>
        </div>
        <div className="">
          <ul className="">
            {cart.map((cartItem) => {
              return (
                <li key={cartItem.id} className="">
                  <div className="">
                    <div className="img_name">
                      <img
                        src={cartItem.thumnail}
                        alt="confirm order lis item"
                      />
                      <div className="name_cal">

                        <div className="">
                            <p className="">{cartItem.name}</p>
                        </div>
                        <div className="price_cal">
                            <span className="">{`${cartItem.quantity}x`}</span>{" "}
                            <span className="">{`@ $${cartItem.price}`}</span>{" "}
                            <span className="">{`${
                            cartItem.quantity * cartItem.price
                            }`}</span>
                      </div>
                      </div>
                    </div>
                    <img
                      className="cancel"
                      onClick={() => removeItem_Id(cartItem.id)}
                      src="/images/icon-remove-item.svg"
                      alt="remove item"
                    />
                  </div>

                </li>
              );
            })}
          </ul>
                  <div className="">
                    <div className="order_total">
                      <div className="">Order Total</div>
                      <strong>${totalPrice}</strong>
                    </div>
                    <button className="">Start New Order</button>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
