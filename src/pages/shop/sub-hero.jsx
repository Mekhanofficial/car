import { Link, useNavigate } from "react-router-dom";
import banner from "../../pictures/shopbanner.png";
import slbanner from "../../pictures/sl-banner.jpg";
import shop6 from "../../pictures/shop6.jpg";
import shop10 from "../../pictures/shop10.jpg";
import shop11 from "../../pictures/shop11.jpg";
import shop12 from "../../pictures/shop12.jpg";
import shop13 from "../../pictures/shop13.jpg";
import shop14 from "../../pictures/shop14.jpg";
import shop15 from "../../pictures/shop15.jpg";
import shop16 from "../../pictures/shop16.jpg";
import shop21 from "../../pictures/shop21.jpg";
import { useState, useContext} from "react";
import CartContext from "../../cart-function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faList,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function SubShopHeroSection() {
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();
  const [range, setRange] = useState([0, 5000]);

  // Function to handle price range change
  const handleChange = (newRange) => {
    setRange(newRange); // Update the range state with new values
  };

  const [buttonColor, setButtonColor] = useState("orange");
  const [hoveredButtonId, setHoveredButtonId] = useState(null);

  const handleColorChange = (color) => {
    setButtonColor(color);
  };

  const handleMouseEnter = (id) => {
    setHoveredButtonId(id);
  };

  const handleMouseLeave = () => {
    setHoveredButtonId(null);
  };

  const Subproducts = [
    {
      id: 1,
      imgSrc: shop10,
      title: "Classic Leather Backpack Daypack 2022",
      price: "$220.00 - $240.00",
      availability: "940 in stock",
      reviews: "(01 review)",
    },
    {
      id: 2,
      imgSrc: shop21,
      title: "Samsang Galaxy A70 128GB Dual-SIM",
      price: "$260.00",
      availability: "940 in stock",
      reviews: "(01 review)",
    },
    {
      id: 3,
      imgSrc: shop11,
      title: "Coffee Maker AH240a Full Function",
      price: "$206.00",
      availability: "940 in stock",
      reviews: "(01 review)",
    },
    {
      id: 4,
      imgSrc: shop12,
      title: "Imported Wooden Felt Cushion Chair",
      price: "$116.00",
      availability: "940 in stock",
      reviews: "(01 review)",
    },
    {
      id: 5,
      imgSrc: shop13,
      title: "Sunhouse Decorative Lights – Imported",
      price: "$154.99",
      availability: "940 in stock",
      reviews: "(01 review)",
    },
    {
      id: 6,
      imgSrc: shop14,
      title: "Korea Stainless Steel Pot Set 5 Pieces",
      price: "$250.00",
      availability: "940 in stock",
      reviews: "(01 review)",
    },
    {
      id: 7,
      imgSrc: shop15,
      title: "HP Stainless Steel Hot Water Bottle",
      price: "$179.00 - $149.00",
      availability: "940 in stock",
      reviews: "(01 review)",
    },
    {
      id: 8,
      imgSrc: shop16,
      title: "The North Face Womens Resolve 2 Jacket",
      price: "$130.00 - $119.00",
      availability: "940 in stock",
      reviews: "(01 review)",
    },
  ];

  return (
    <>
      <div className="shopcontainer">
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
                      max={3500}
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
          <div className="rowrow2">
            <div className="subrowww subrowww1">
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
            <div className="subrowww subrowww2">
              <div className="shoppage">
                <div className="subshop">
                  <Link to="/shopping-page">
                    <a href="">
                      {" "}
                      <FontAwesomeIcon
                        className="tablecellsub1"
                        icon={faTableCells}
                      />
                    </a>
                  </Link>

                  <FontAwesomeIcon className="tablecellsub2" icon={faList} />
                  <h3>Showing 1-20 of 29 relults</h3>
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
            {Subproducts.map((product) => (
              <div key={product.id} className="subrowww subrowww3">
                <div>
                  <img src={product.imgSrc} alt={product.title} />
                </div>
                <div>
                  <h1>{product.title}</h1>
                  <div className="starsx">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        className="star"
                        icon={faStarOutline}
                      />
                    ))}
                    <h4>{product.reviews}</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="">Bass and Stereo Sound.</a>
                    </li>
                    <li>
                      <a href="">Display with 3088 x 1440 pixels resolution.</a>
                    </li>
                    <li>
                      <a href="">Memory, Storage & SIM: 12GB RAM, 256GB.</a>
                    </li>
                    <li>
                      <a href="">Androi v10.0 Operating system.</a>
                    </li>
                  </ul>
                </div>
                <div className="subrowww3text">
                  <h2 className="avail">
                    Availability: <span>{product.availability}</span>
                  </h2>
                  <h3>{product.price}</h3>
                  <div>
                    <button
                      style={{ backgroundColor: buttonColor }}
                      onClick={() => addToCart(product)}
                      className="cartbtn"
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
                      className="viewbtn"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
