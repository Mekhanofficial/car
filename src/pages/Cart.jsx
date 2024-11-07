import HeaderPage from "../components/header";
import FooterPage from "../components/footer";
import ct1 from "../pictures/ct1.avif";
import { useContext } from "react";
import CartContext from "../cart-function";
import { Link } from "react-router-dom";

export default function MyCart() {
   const { cart, getTotalItemCount, removeItemFromCart, getTotalPrice,increaseQuantity,decreaseQuantity } =
     useContext(CartContext);


  return (
    <>
      <HeaderPage
        cart={cart}
        getTotalItemCount={getTotalItemCount}
        getTotalPrice={getTotalPrice}
      />
      <div className="wish">
        <img src={ct1} alt="Cart Banner" />
        <h1>Your Cart</h1>
        <h2>
          <span>Home / </span>Cart
        </h2>
      </div>
      <div className="wisshcontainer">
        <div className="itemhead">
          <h2>Images</h2>
          <h2>Product</h2>
          <h2>Unit Price</h2>
          <h2>Quantity</h2>
          <h2>Total</h2>
          <h2>Remove</h2>
        </div>
        {cart.map((item) => (
          <div key={item.id} className="wissh">
            <img src={item.img} alt="" />
            <div className="cartitembox2">
              <ul>
                <li>{item.name}</li>
              </ul>
            </div>
            <div className="cartitembox2">
              <ul>
                <li className="itprice">${item.salePrice.toFixed(2)}</li>
              </ul>
            </div>
            <div className="subadd subadd3">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <input type="number" readOnly value={item.quantity} />
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <h3 className="itprice">
              ${(item.salePrice * item.quantity).toFixed(2)}
            </h3>
            <button
              className="exes"
              onClick={() => removeItemFromCart(item.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <div className="coupon">
        <div>
          <input type="text" placeholder="Coupon code" />
          <button>Apply Coupon</button>
        </div>
        <button>Update Cart</button>
      </div>
      <div className="cartend">
        <h1>Cart Totals</h1>
        <div className="total">
          <h2>Subtotal</h2>
          <h2>${getTotalPrice()}</h2>
        </div>
        <div className="total">
          <h2>Total</h2>
          <h2>${getTotalPrice()}</h2>
          <h2>Total Items: {getTotalItemCount()}</h2>
        </div>
        <Link to="/checkout">
          <button>Proceed To Checkout</button>
        </Link>
      </div>
      <FooterPage />
    </>
  );
}
