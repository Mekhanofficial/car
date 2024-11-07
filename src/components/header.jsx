import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../cart-function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faUserAlt,
  faHeart,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function HeaderPage() {
  const {
    cart,
    getTotalItemCount,
    removeItemFromCart,
    getTotalPrice,
    getWishlistCount,
  } = useContext(CartContext);

  const [cate, setCate] = useState({
    categories: false,
    shop: false,
    newArrivals: false,
    cart: false,
  });
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRefs = {
    categories: useRef(null),
    shop: useRef(null),
    newArrivals: useRef(null),
    cart: useRef(null),
  };

  // List of categories
  const categories = [
    "All Categories",
    "Best Seller Products",
    "Top 10 Offers",
    "New Arrivals",
    "Phones & Tablets",
    "Electronics & Digital",
    "Fashion & Clothings",
    "Jewelry & Watches",
    "Health & Beauty",
    "Sound & Speakers",
    "TV & Audio",
    "Computers",
  ];

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCate((prev) => ({ ...prev, categories: false })); // Close the dropdown after selection
  };

  // Handle click outside to close dropdowns
  const handleClickOutside = (event) => {
    Object.entries(dropdownRefs).forEach(([key, ref]) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setCate((prev) => ({ ...prev, [key]: false }));
      }
    });
  };

  // Set up event listener for clicks outside of dropdowns
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle function for dropdowns
  const toggleDropdown = (type) => {
    setCate((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleMouseOver = () => toggleDropdown("cart");
  const handleMouseOut = () => toggleDropdown("cart");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to the search results page with the query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header>
        <div className="head1">
          <div className="text1">
            <div className="text1sub">
              <div className="ussd">
                <h2>Language:</h2>
                <select className="languas">
                  <option>English</option>
                  <option>Deutsch</option>
                  <option>Francais</option>
                  <option>Espanol</option>
                </select>
              </div>
              <div className="vert"></div>
              <div className="ussd ussd2">
                <h2>Currency:</h2>
                <select className="languas">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>INR</option>
                  <option>BDT</option>
                  <option>BGD</option>
                </select>
              </div>
            </div>
            <div className="vert"></div>
            <a href="">Need Help? +001 123 456 789</a>
          </div>
          <div className="subtext1">
            <Link to="/about-us">
              <a href="">About Us</a>
            </Link>
            <div className="vert"></div>
            <Link to="/contact-us">
              <a href="">Order Tracking</a>
            </Link>
            <div className="vert"></div>
            <Link to="/contact-us">
              <a href="">Contact Us</a>
            </Link>
            <div className="vert"></div>
            <Link to="/Faqs">
              <a href="">FAQS</a>
            </Link>
          </div>
        </div>
        <div className="line1"></div>
        <div className="head2">
          <Link to="/">
            <h1>Dukamarket</h1>
          </Link>
          <div className="inputbtn">
            <div className="input-cate" ref={dropdownRefs.categories}>
              <h3 onClick={() => toggleDropdown("categories")}>
                {selectedCategory}
                <FontAwesomeIcon
                  className={`chevrondown downn ${
                    cate.categories ? "up" : "down"
                  }`}
                  icon={faChevronDown}
                />
              </h3>
              <div className="vert invert"></div>
              {cate.categories && (
                <div className="catesection">
                  {categories.map((category, index) => (
                    <h4
                      key={index}
                      className={selectedCategory === category ? "active" : ""}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(category);
                      }}
                    >
                      {category}
                    </h4>
                  ))}
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="I'm shopping for..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <a href="#" onClick={handleSearch}>
              <FontAwesomeIcon className="search" icon={faSearch} />
            </a>
          </div>
          <div className="subhead2">
            <FontAwesomeIcon className="user" icon={faUserAlt} />
            <div className="log">
              <a className="loghov1" href="">
                Login
              </a>
              <Link to="/my-account">
                <a href="">My Account</a>
              </Link>
            </div>
            <FontAwesomeIcon className="heart" icon={faHeart} />
            <div className="num">{getWishlistCount()}</div>
            <div className="log wishlog">
              <a className="loghov1" href="">
                Favorite
              </a>
              <Link to="/my-wishlists">
                <a href="">My Wishlist</a>
              </Link>
            </div>
            <FontAwesomeIcon className="cartshopping" icon={faCartShopping} />
            <div className="num2">{getTotalItemCount()}</div>
            <div
              className="log logcart"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <a className="loghov1" href="">
                Your Cart
              </a>
              <Link to="/cart">
                <a href="">${getTotalPrice()}</a>
              </Link>
              {cate.cart && (
                <div className="cartbox">
                  <h2>
                    Your Cart <span>({getTotalItemCount()} Item in Cart)</span>
                  </h2>
                  <div className="cartline"></div>
                  {cart.map((item) => (
                    <div className="cartbox2" key={item.id}>
                      <img src={item.img} alt="" />
                      <div className="itemcartbox">
                        <h2>{item.name}</h2>
                        <h2>${item.salePrice.toFixed(2)}</h2>
                        <button
                          className="exes"
                          onClick={() => removeItemFromCart(item.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="cartline"></div>
                  <div className="subto">
                    <h4>Subtotal</h4>
                    <h4 className="cas">${getTotalPrice()}</h4>
                  </div>
                  <div className="cartbutt2">
                    <button className="viewcart">View cart</button>
                    <div>
                      <Link to="/checkout">
                        <button className="checkout">CHECKOUT</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="head3">
          <div
            className="dept"
            onClick={() => toggleDropdown("shop")}
            ref={dropdownRefs.shop}
          >
            <FontAwesomeIcon className="bars" icon={faBars} />
            <h1>SHOP BY DEPARTMENT</h1>
          </div>
          <div className="subhead3">
            <div className="vert"></div>
            <Link to="/">
              <a href="">HOME</a>
            </Link>
            <Link to="/shopping-page">
              <a href="">SHOP</a>
            </Link>
            <Link to="/about-us">
              <a href="">ABOUT US</a>
            </Link>
            {/* <Link to="/blog-page">
              <a href="">BLOG</a>
            </Link> */}
            <a href="">PAGES</a>
          </div>
          <div className="spend">
            <h3>Spend $120 more and get free shipping!</h3>
          </div>
        </div>
      </header>
      {cate.shop && (
        <div className="shopdrop" ref={dropdownRefs.shop}>
          <div className="shopp">
            <a href="">All Categories</a>
            <FontAwesomeIcon
              className="chevrondown downn"
              icon={faChevronDown}
            />
          </div>
          <div className="line er"></div>
          <div className="shopp">
            <a href="">Phone & Electronics</a>
            <FontAwesomeIcon
              className="chevrondown downn"
              icon={faChevronDown}
            />
          </div>
          <div className="line er"></div>
          <div className="shopp">
            <a href="">Best Seller Products</a>
            <FontAwesomeIcon
              className="chevrondown downn"
              icon={faChevronDown}
            />
          </div>
          <div className="line er"></div>
          <a href="">Top 10 Offers</a>
          <div className="line er"></div>
          <div className="shopp" onClick={() => toggleDropdown("newArrivals")}>
            <h3>New Arrivals</h3>
            <FontAwesomeIcon
              className="chevrondown downn"
              icon={faChevronDown}
            />
          </div>
          {cate.newArrivals && (
            <div className="newdrop" ref={dropdownRefs.newArrivals}>
              <h4>Home Appliances</h4>
              <h4 onClick={() => toggleDropdown("newArrivals")}>Technology</h4>
              {cate.newArrivals && (
                <div className="storage">
                  <h5>Storage Devices</h5>
                  <h5>Monitors</h5>
                  <h5>Laptops</h5>
                </div>
              )}
              <h4>Office Equipments</h4>
            </div>
          )}
          <div className="line er"></div>
          <a href="">TV & Audio</a>
          <div className="line er"></div>
          <a href="">Electronics & Digitals</a>
          <div className="line er"></div>
          <a href="">Fashion & Clothings</a>
          <div className="line er"></div>
          <a href="">Jewelry & Watches</a>
          <div className="line er"></div>
          <a href="">Health & Beauty</a>
        </div>
      )}
    </>
  );
}
