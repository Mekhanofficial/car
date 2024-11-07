import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ac9 from "../../pictures/ac9.jpg";
import px19 from "../../pictures/px19.jpg";
import top7 from "../../pictures/top7.jpg";
import px35 from "../../pictures/px35.jpg";
import ac10 from "../../pictures/ac10.jpg";
import px38 from "../../pictures/px38.jpg";
import shop6 from "../../pictures/shop6.jpg";
import shop10 from "../../pictures/shop10.jpg";
import shop11 from "../../pictures/shop11.jpg";
import shop12 from "../../pictures/shop12.jpg";
import shop13 from "../../pictures/shop13.jpg";
import HeaderPage from "../../components/header";
import FooterPage from "../../components/footer";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

export default function Item6Page() {
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
            <h1>PCs & laptop</h1>
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
                <img src={top7} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv">
                  <img src={ac9} alt="" />
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
                  13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core,
                  NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM,
                  512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4
                </h4>
                <h4 className="hprice">
                  <s className="strike">$249.00</s> $219.00
                </h4>
              </div>
              <div className="itemboxx">
                <img src={top7} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv">
                  <img src={px35} alt="" />
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
                  14″ FHD Ultrabook (400 nits) with 10th Gen Intel i7-10510U
                  Processor up to 4.90 GHz, 1 TB PCIe SSD, 16GB RAM, and Windows
                  11 Pro
                </h4>
                <h4 className="hprice">
                  <s className="strike">$249.00</s> $219.00
                </h4>
              </div>
              <div className="itemboxx">
                <img src={top7} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv">
                  <img src={ac10} alt="" />
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
                  15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 ,
                  Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey
                </h4>
                <h4 className="hprice">
                  <s className="strike">$249.00</s> $219.00
                </h4>
              </div>
              <div className="itemboxx">
                <img src={top7} alt="" />
                <FontAwesomeIcon
                  className="truck basket2"
                  icon={faBasketShopping}
                />
                <div className="imghovv2">
                  <img src={px38} alt="" />
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
                  15.6″ Rugged Ultrabook – 4K UHD – 3840 x 2160 – Intel Core i7
                  11th Gen i7-1195G7 2.90 GHz – 32 GB RAM – 1 TB SSD – Carbon
                  Gray
                </h4>
                <h4 className="hprice">
                  <s className="strike">$249.00</s> $219.00
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
