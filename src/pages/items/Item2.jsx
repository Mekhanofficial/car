import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping ,faChevronDown} from "@fortawesome/free-solid-svg-icons";
import ac12 from "../../pictures/ac12.jpg";
import ac11 from "../../pictures/ac11.jpg";
import ac13 from "../../pictures/ac13.jpg";
import ac14 from "../../pictures/ac14.jpg";
import ac15 from "../../pictures/ac15.jpg";
import ac16 from "../../pictures/ac16.jpg";
import shop6 from "../../pictures/shop6.jpg";
import shop10 from "../../pictures/shop10.jpg";
import shop11 from "../../pictures/shop11.jpg";
import shop12 from "../../pictures/shop12.jpg";
import shop13 from "../../pictures/shop13.jpg";
import HeaderPage from "../../components/header";
import FooterPage from "../../components/footer";
import { Link } from "react-router-dom";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

export default function Item2Page() {
  return (
    <>
      <HeaderPage />
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
          <div className="itemcontainer">
            <h1>Audio & video </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              turpis velit, iaculis vel risus non, convallis <br /> rhoncus
              ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat
              quam. In hac habitasse platea <br /> dictumst. Sed bibendum
              porttitor sem, at sollicitudin orci placerat nec.
            </p>
            <div className="sorting">
              <h2>Showing all 5 results</h2>
              <div className="srt">
                <h2>Default Sorting</h2>
                <FontAwesomeIcon className="dwn" icon={faChevronDown} />
              </div>
            </div>
            <div className="itembox">
              <Link to="/item-cart9">
                <div className="itemboxx">
                  <img src={ac11} alt="" />
                  <FontAwesomeIcon
                    className="truck basket2"
                    icon={faBasketShopping}
                  />
                  <div className="imghovv">
                    <img src={ac12} alt="" />
                  </div>
                  <button>Sale!</button>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="stay"
                      icon={faStarOutline}
                    />
                  ))}
                  <h4>
                    75-Inch Class Neo QLED QN90A Series 4K UHD Quantum HDR 32x
                    Smart TV
                  </h4>
                  <h4 className="hprice">
                    <s className="strike">$249.00</s> $219.00
                  </h4>
                </div>
              </Link>
              <Link to="/item-cart10">
                <div className="itemboxx">
                  <img src={ac11} alt="" />
                  <FontAwesomeIcon
                    className="truck basket2"
                    icon={faBasketShopping}
                  />
                  <div className="imghovv">
                    <img src={ac13} alt="" />
                  </div>
                  <button>Sale!</button>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="stay"
                      icon={faStarOutline}
                    />
                  ))}
                  <h4>
                    Max SR Home Theater Surround Sound Bar HDMI, Optical Cables,
                    Wireless Subwoofer & Two Speakers
                  </h4>
                  <h4 className="hprice">
                    <s className="strike">$249.00</s> $219.00
                  </h4>
                </div>
              </Link>
              <Link to="/item-cart11">
                <div className="itemboxx">
                  <img src={ac11} alt="" />
                  <FontAwesomeIcon
                    className="truck basket2"
                    icon={faBasketShopping}
                  />
                  <div className="imghovv">
                    <img src={ac14} alt="" />
                  </div>
                  <button>Sale!</button>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="stay"
                      icon={faStarOutline}
                    />
                  ))}
                  <h4>
                    OLED C1 Series 55” 4k Smart TV (3840 x 2160), 120Hz Refresh
                    Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode
                  </h4>
                  <h4 className="hprice">
                    <s className="strike">$249.00</s> $219.00
                  </h4>
                </div>
              </Link>
              <Link to="/item-cart12">
                <div className="itemboxx">
                  <img src={ac11} alt="" />
                  <FontAwesomeIcon
                    className="truck basket2"
                    icon={faBasketShopping}
                  />
                  <div className="imghovv2">
                    <img src={ac15} alt="" />
                  </div>
                  <button>Sale!</button>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="stay"
                      icon={faStarOutline}
                    />
                  ))}
                  <h4>
                    V-Series 5.1 Home Theater Sound Bar with Dolby Audio,
                    Bluetooth, Wireless Subwoofer, Voice Assistant Compatible
                  </h4>
                  <h4 className="hprice">
                    <s className="strike">$249.00</s> $219.00
                  </h4>
                </div>
              </Link>
              <Link to="/item-cart13">
                <div className="itemboxx">
                  <img src={ac11} alt="" />
                  <FontAwesomeIcon
                    className="truck basket2"
                    icon={faBasketShopping}
                  />
                  <div className="imghovv2">
                    <img src={ac16} alt="" />
                  </div>
                  <button>Sale!</button>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="stay"
                      icon={faStarOutline}
                    />
                  ))}
                  <h4>
                    X80J 55 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby
                    Vision HDR
                  </h4>
                  <h4 className="hprice">
                    <s className="strike">$249.00</s> $219.00
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
