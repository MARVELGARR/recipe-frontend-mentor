import { useCart } from "../../context/cartContext";

const ConfirmDialog = () => {
  const { cart, removeItem_Id } = useCart();
  const TotalItemQuntity = cart.map((i) => i.price * i.quantity);
  const totalPrice = TotalItemQuntity.reduce(
    (Vaccumulatorlue, currentValue) => {
      return Vaccumulatorlue + currentValue;
    },
    0
  );
  return (
    <div className="overlay">
      <div className="confirm">
        <div className="">
          <img
            src="/images/icon-order-confirmed.svg"
            alt="confirm icon"
            className=""
          />
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
                    <div className="">
                      <img
                        src={cartItem.thumnail}
                        alt="confirm order lis item"
                      />
                      <div className=""></div>
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
                    <img
                      className="cancel"
                      onClick={() => removeItem_Id(cartItem.id)}
                      src="/images/icon-remove-item.svg"
                      alt="remove item"
                    />
                  </div>

                  <div className="">
                    <div className="order_total">
                      <div className="">Order Total</div>
                      <strong>${totalPrice}</strong>
                    </div>
                    <button className="">Confirm Order</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
