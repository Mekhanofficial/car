
import HeaderPage from "../components/header";
import FooterPage from "../components/footer";
import CartContext from "../cart-function";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ct2 from "../pictures/it1.avif"
export default function MyWishlists (){
    const { wishlist, removeFromWishlist, getWishlistCount } =
      useContext(CartContext);

     const handleRemoveFromWishlist = (productId) => {
       removeFromWishlist(productId);
     };
return (
  <>
    <HeaderPage />
    <div className="wish">
      <img src={ct2} alt="" />
      <h1>Wishlist</h1>
      <h2>
        <span>Home / </span>Wishlist
      </h2>
    </div>
    <div className="wisshcontainer2">
      <div className="wishlist-container">
        <h1>Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-items">
            {wishlist.map((product) => (
              <div key={product.id} className="wishlist-item">
                <img src={product.img} alt={product.name} />
                <div className="wishlist-item-info">
                  <h2>{product.name}</h2>
                  <p>${product.salePrice}</p>
                  <button onClick={() => handleRemoveFromWishlist(product.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link to="/shopping-page">
          <h2>Continue Shopping</h2>
        </Link>
      </div>
    </div>
    <FooterPage />
  </>
);

}