import { Link, useNavigate } from "react-router-dom";
import banner from "../../pictures/shopbanner.png";
import slbanner from "../../pictures/sl-banner.jpg";
import shop6 from "../../pictures/shop6.jpg";
import shop10 from "../../pictures/shop10.jpg";
import shop11 from "../../pictures/shop11.jpg";
import shop12 from "../../pictures/shop12.jpg";
import shop13 from "../../pictures/shop13.jpg";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../cart-function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faList,
  faTableCells,
  faEye,
  faHeart,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function ShopHeroSection({products}) {
  const {
    addToCart,
    addToWishlist,
    wishlist,
    removeFromWishlist,
    getWishlistCount,
  } = useContext(CartContext); // Accessing cart-related functions and state from CartContext

  const navigate = useNavigate(); // Hook for navigation
  const [currentPage, setCurrentPage] = useState(1); // State to manage the current page
  const itemsPerPage = 20; // Number of products per page

  const [range, setRange] = useState([0, 5000]); // State for price range filtering
  const [filteredProducts, setFilteredProducts] = useState(products); // State for products after filtering

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // Calculate total pages based on filtered products

  // Effect to filter products based on the price range
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.salePrice >= range[0] && product.salePrice <= range[1]
    );
    setFilteredProducts(filtered); // Update the state with filtered products
    setCurrentPage(1); // Reset to the first page when filtering
  }, [range, products]); // Depend on range and products

  // Function to handle price range change
  const handleChange = (newRange) => {
    setRange(newRange); // Update the range state with new values
  };

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid page numbers
    setCurrentPage(page); // Set the current page to the new page
  };

  const indexOfLastProduct = currentPage * itemsPerPage; // Calculate index of last product
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage; // Calculate index of first product
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); // Slice the filtered products array for the current page

  const [hoveredProductId, setHoveredProductId] = useState(null); // State for tracking hovered product

  // Function to set hovered product ID
  const handleMouseOver = (productId) => setHoveredProductId(productId);
  // Function to clear hovered product ID
  const handleMouseOut = () => setHoveredProductId(null);

  // Function to check if a product is in the wishlist
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId); // Return true if product is in wishlist
  };

  // Function to handle clicks on wishlist button
  const handleWishlistClick = (product) => {
    if (isProductInWishlist(product.id)) {
      removeFromWishlist(product.id); // Remove product from wishlist if it's already there
    } else {
      addToWishlist(product); // Add product to wishlist if it's not there
    }
  };

  const [buttonColor, setButtonColor] = useState("orange"); // State for button color
  const [hoveredButtonId, setHoveredButtonId] = useState(null); // State for tracking hovered button

  // Function to handle button color change
  const handleColorChange = (color) => {
    setButtonColor(color); // Update button color state
  };

  // Function to set hovered button ID
  const handleMouseEnter = (id) => {
    setHoveredButtonId(id); // Set the ID of the hovered button
  };
  // Function to clear hovered button ID
  const handleMouseLeave = () => {
    setHoveredButtonId(null); // Clear hovered button ID
  };

  return (
    <>
      <div className="mainrow">
        <div className="row1">
          <div className="subrow subrow1">
            <div className="shopbod">
              <div className="items1">
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <h1>Product categories</h1>
                <div className="prolyn">
                  <div className="proline1"></div>
                  <div className="proline11"></div>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Clothing & Apparel <span>(12)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Consumer Electrics <span>(60)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Computers & Technologies <span>(41)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Phones & Accessories <span> (28)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Babies & Moms <span>(21)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Books & Office <span>(62)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Sport & Outdoo <span>(22)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Chairs & Stools <span>(20)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Furniture & Acessories <span>(06)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Kitchen & Tableware <span>(30)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Lighting <span>(30)</span>
                  </h5>
                </div>
                <div className="subItems">
                  <input type="radio" name="" id="" />
                  <h5>
                    Armchairs & Chaises <span>(30)</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="subrow subrow2">
            <div className="filter">
              <h2>Filter By Price</h2>
              <div className="prolyn">
                <div className="proline2"></div>
                <div className="proline22"></div>
              </div>
              <div className="price-filter">
                <h3>
                  ${range[0]} To ${range[1]}
                </h3>
                <div className="slider-container">
                  <Slider
                    range
                    min={0}
                    max={5000}
                    value={range}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="subrow subrow3">
            <div className="choosecolor choosecolors">
              <h2>Choose Color</h2>
              <div className="prolyn">
                <div className="proline2"></div>
                <div className="proline22"></div>
              </div>
              <div className="circles">
                {["orange", "blue", "red", "aqua", "purple", "pink"].map(
                  (color, index) => (
                    <div
                      key={index}
                      className={`circle${index + 1}`}
                      onClick={() => handleColorChange(color)}
                      style={{ backgroundColor: color }}
                    ></div>
                  )
                )}
              </div>

              <div className="circles2">
                {["yellow", "gray"].map((color, index) => (
                  <div
                    key={index + 6}
                    className={`circle${index + 7}`}
                    onClick={() => handleColorChange(color)}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="subrow subrow4">
            <div className="choosecolor chooserating">
              <h2>Choose Rating</h2>
              <div className="prolyn prolyn2">
                <div className="proline2"></div>
                <div className="proline22"></div>
              </div>
              <div className="rating">
                <div className="rate">
                  <input className="rate-input" type="radio" name="" id="" />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <h3>(53)</h3>
                </div>
              </div>
              <div className="rating">
                <div className="rate">
                  <input className="rate-input" type="radio" name="" id="" />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  {[...Array(1)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="star ratestar"
                      icon={faStarOutline}
                    />
                  ))}
                  <h3>(37)</h3>
                </div>
              </div>
              <div className="rating">
                <div className="rate">
                  <input className="rate-input" type="radio" name="" id="" />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  {[...Array(2)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="star  ratestar"
                      icon={faStarOutline}
                    />
                  ))}
                  <h3>(7)</h3>
                </div>
              </div>
              <div className="rating">
                <div className="rate">
                  <input className="rate-input" type="radio" name="" id="" />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  {[...Array(3)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="star  ratestar"
                      icon={faStarOutline}
                    />
                  ))}
                  <h3>(5)</h3>
                </div>
              </div>
              <div className="rating">
                <div className="rate">
                  <input className="rate-input" type="radio" name="" id="" />
                  <FontAwesomeIcon className="star-rate" icon={faStar} />
                  {[...Array(4)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="star  ratestar"
                      icon={faStarOutline}
                    />
                  ))}
                  <h3>(3)</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="subrow subrow5">
            <div className="choosecolor">
              <h2>Choose Size</h2>
              <div className="prolyn prolyn2">
                <div className="proline2"></div>
                <div className="proline22"></div>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  S<span>(30)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  L<span>(60)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  M<span>(41)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  XXL<span>(28)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  2XL<span>(62)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  3XL<span>(25)</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="subrow subrow6">
            <div className="choosecolor">
              <h2>Choose Brand</h2>
              <div className="prolyn prolyn2">
                <div className="proline2"></div>
                <div className="proline22"></div>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  CarRentals<span>(12)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  CarVoodoo<span>(60)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  Creative<span>(41)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  Impact<span>(28)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  IQVia<span>(62)</span>
                </h5>
              </div>
              <div className="subItems">
                <input type="radio" name="" id="" />
                <h5>
                  LeadsGreen<span>(25)</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="subrow subrow7">
            <div className="lastshop">
              <div className="offers">
                <h2>Special Offers</h2>
                <div className="prolyn prolyn2">
                  <div className="proline2"></div>
                  <div className="proline22"></div>
                </div>
              </div>
              <div className="lastshopflex">
                <img src={shop10} alt="" />
                <div>
                  <div>
                    <a href="">
                      Classic Leather <br /> Backpack Daypack <br /> 2022
                    </a>
                  </div>
                  <div className="cash">
                    <a href="">$300.00</a>
                  </div>
                </div>
              </div>
              <div className="lastshopflex">
                <img src={shop6} alt="" />
                <div>
                  <div>
                    <a href="">
                      Samsung Galaxy <br /> A12, 32GB, Black <br /> - (Locked)
                    </a>
                  </div>
                  <div className="cash">
                    <a href="">$300.00</a>
                  </div>
                </div>
              </div>
              <div className="lastshopflex">
                <img src={shop11} alt="" />
                <div>
                  <div>
                    <a href="">
                      Coffee Maker <br /> AH240a Full <br /> Function
                    </a>
                  </div>
                  <div className="cash">
                    <a href="">$300.00</a>
                  </div>
                </div>
              </div>
              <div className="lastshopflex">
                <img src={shop12} alt="" />
                <div>
                  <div>
                    <a href="">
                      Imported Wooden <br /> Felt Cushion Chair
                    </a>
                  </div>
                  <div className="cash">
                    <a href="">$300.00</a>
                  </div>
                </div>
              </div>
              <div className="lastshopflex">
                <img src={shop13} alt="" />
                <div>
                  <div>
                    <a href="">
                      Sunhouse <br /> Decorative Lights <br /> - Imported
                    </a>
                  </div>
                  <div className="cash">
                    <a href="">$300.00</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="subroww subroww1">
            <div className="shopimg">
              <img className="shopimg1" src={slbanner} alt="" />
              <img className="shopimg2" src={banner} alt="" />
              <div className="shoptext">
                <h2>Hurry Up!</h2>
                <h2>Free Shipping All Order Over $99 </h2>
                <button className="disc-btn2">DISCOVER NOW</button>
              </div>
            </div>
          </div>
          <div className="subroww subroww2">
            <div className="shoppage">
              <div className="subshop">
                <FontAwesomeIcon className="tablecell" icon={faTableCells} />
                <Link to="/shopping-page2">
                  <a href="">
                    <FontAwesomeIcon className="tablecell2" icon={faList} />
                  </a>
                </Link>

                <h3>Showing 1-20 of 40 relults</h3>
                <div>
                  <select className="ten">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                  </select>
                </div>
                <div>
                  <select className="latest">
                    <option>Latest</option>
                    <option>New</option>
                    <option>Upcoming</option>
                    <option>Espanol</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="shopcontainer">
            {currentProducts.map((product) => (
              <div key={product.id} className="subroww">
                <div
                  className="subshop2"
                  onMouseOver={() => handleMouseOver(product.id)}
                  onMouseOut={handleMouseOut}
                >
                  <div className="imgshop">
                    <img src={product.img} alt={product.name} />
                    {hoveredProductId === product.id && (
                      <div className="layer">
                        <FontAwesomeIcon
                          className="star-rate star-rate1"
                          icon={faEye}
                        />
                        <FontAwesomeIcon
                          className="star-rate star-rate1"
                          icon={faHeart}
                          onClick={() => handleWishlistClick(product)}
                          style={{
                            color: isProductInWishlist(product.id)
                              ? "red"
                              : "black",
                          }}
                        />
                        <FontAwesomeIcon
                          className="star-rate star-rate1"
                          icon={faLayerGroup}
                        />
                      </div>
                    )}
                    <h2>{product.name}</h2>
                    <div className="stars">
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          className="star"
                          icon={faStarOutline}
                        />
                      ))}
                      <h4>(01 review)</h4>
                    </div>
                    <h4>
                      <s className="strike">${product.originalPrice}</s> $
                      {product.salePrice}
                    </h4>
                    <button
                      style={{ backgroundColor: buttonColor }}
                      onClick={() => addToCart(product)}
                      className="cart-btn"
                    >
                      ADD TO CART
                    </button>
                    <button
                      style={{
                        backgroundColor:
                          hoveredButtonId === product.id
                            ? buttonColor
                            : "white",
                      }}
                      onMouseEnter={() => handleMouseEnter(product.id)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => navigate(`/item-cart/${product.id}`)}
                      className="view-btn"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  className={currentPage === page + 1 ? "active" : ""}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>

            <div className="wishlist-icon-container">
              <Link to="/my-wishlists">
                <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
                <div className="wishlist-icon-badge">{getWishlistCount()}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
