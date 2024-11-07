import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import px9 from "../../pictures/px9.jpg";
import ac6 from "../../pictures/ac6.jpg";
import ac7 from "../../pictures/ac7.jpg";
import top4 from "../../pictures/top4.jpg";
import ac8 from "../../pictures/ac8.jpg";
import px18 from "../../pictures/px18.jpg";
import px15 from "../../pictures/px15.jpg";
import shop6 from "../../pictures/shop6.jpg";
import shop10 from "../../pictures/shop10.jpg";
import shop11 from "../../pictures/shop11.jpg";
import shop12 from "../../pictures/shop12.jpg";
import shop13 from "../../pictures/shop13.jpg";
import HeaderPage from "../../components/header";
import FooterPage from "../../components/footer";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

export default function Item3Page() {
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
            <h1>Gadgets </h1>
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
              <div className="itemboxx">
                <img src={top4} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv">
                  <img src={px9} alt="" />
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
                  4K Digital Camera, 12-32mm and 45-150mm Lens Bundle, 16
                  Megapixel Kit, 5 Axis In-Body Dual Image Stabilization, Black
                </h4>
                <h4 className="hprice">
                  <s className="strike">$249.00</s> $219.00
                </h4>
              </div>
              <div className="itemboxx">
                <img src={top4} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv">
                  <img src={ac7} alt="" />
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
                  5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera
                  30X Space Zoom Night Mode, Space Grey
                </h4>
                <h4 className="hprice">
                  <s className="strike">$249.00</s> $219.00
                </h4>
              </div>
              <div className="itemboxx">
                <img src={top4} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv">
                  <img src={ac8} alt="" />
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
                  5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid
                  Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W
                  Wireless Charge
                </h4>
                <h4 className="hprice">
                  <s className="strike">$1549.00</s> $1219.00
                </h4>
              </div>
              <div className="itemboxx">
                <img src={top4} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv2">
                  <img src={px15} alt="" />
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
                  Android Tablet 10.5” LCD Screen 64GB Storage Long-Lasting
                  Battery Kids Content Smart Switch Expandable Memory
                </h4>
                <h4 className="hprice">$599.00</h4>
              </div>
              <div className="itemboxx">
                <img src={top4} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv2">
                  <img src={px18} alt="" />
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
                  Mirrorless Vlogging Camera Polaroid Kit with EF-M 15-45mm
                  Lens, Black
                </h4>
                <h4 className="hprice">$599.00</h4>
              </div>
              <div className="itemboxx">
                <img src={top4} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv2">
                  <img src={ac6} alt="" />
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
                  Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY)
                  International Model
                </h4>
                <h4 className="hprice">
                  <s className="strike">$699.00</s> $649.00
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
