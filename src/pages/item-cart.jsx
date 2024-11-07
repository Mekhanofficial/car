import it1 from "../pictures/it1.avif";
import top1 from "../pictures/top1.jpg";
import ac4 from "../pictures/ac4.jpg";
import ac5 from "../pictures/ac5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import HeaderPage from "../components/header";
import FooterPage from "../components/footer";
import { useContext } from "react";
import CartContext from "../cart-function";
import { useParams } from "react-router-dom";
import products from "./Products";

export default function ItemCart() {
  const { id } = useParams();
  const { addToCart, cart, increaseQuantity, decreaseQuantity, getTotalPrice } =
    useContext(CartContext);

  const productInCart = cart.find((item) => item.id === parseInt(id));
  const product = productInCart || products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <>
      <HeaderPage />
      <div className="itemcartcontainer">
        <div key={product.id} className="wisshy">
          <div>
            <img src={product.img} alt={product.name} />
          </div>
          <div>
            <div className="cartitembox">
              <ul>
                <li>
                  Home / Shop/
                  {product.name}
                </li>
                <li>
                  <s className="strike">${product.originalPrice}</s> $
                  {product.salePrice}
                </li>
              </ul>
            </div>

            <div className="keyfeat">
              <h1>{product.name}</h1>
              <h3>Key features</h3>
              <ul>
                <li>Newest technology</li>
                <li>Best in class components</li>
                <li>Dimensions -69.5 x 75.0 x 169.0</li>
                <li>Maintenance free</li>
                <li>12 years warranty</li>
              </ul>
            </div>
            <div className="subadd subadd2">
              <button
                className="countdown"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>
              <input
                type="number"
                readOnly
                value={productInCart ? productInCart.quantity : 1}
              />
              <button
                className="countup"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>
              <button
                onClick={() => addToCart(product)}
                className="cart-btn cart-btnitemcart"
              >
                ADD TO CART
              </button>
            </div>
            <div>
              <h4 className="hprice">${getTotalPrice()}</h4>
              <div className="subadd"></div>
              <hr />
              <h4>
                Category: <span>Air conditiner</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <hr />
        <div className="des"></div>
        <div className="subdes">
          <h2>Description</h2>
          <h2>Reviews(0)</h2>
        </div>
        <h1>More about the product</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac massa eget urna tempor vehicula vel id nisi. <br /> Pellentesque
          sed felis auctor, molestie lectus vitae, elementum orci. In et nunc
          consequat, semper.
        </p>
        <img className="gamepad" src={it1} alt="" />
        <div className="nunc">
          <h4>Nunc sed justo</h4>
          <h2>
            Cras vehicula semper ex, et fermentum tortor <br /> varius eget
            interdum et malesuada fames ac <br /> ante tellus eget.
          </h2>
        </div>
        <div className="prod">
          <h1>Product's Features</h1>
          <div>
            <h3>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
              elit tellus, luctus nec <br /> ullamcorper mattis.
            </h3>
            <ul>
              <li>Nunc sed justo at nisi commodo varius</li>
              <div className="lane"></div>
              <li>Ut eu urna enim. Curabitur posuere fermentum</li>
              <div className="lane"></div>
              <li>Curabitur at orci nec urna aliquet porta</li>
            </ul>
          </div>
        </div>
        <img className="gamepad" src={it1} alt="" />
        <div className="gamepadtext">
          <h4>Lorem ipsum dolor</h4>
          <h2>
            Nam bibendum augue <br /> pharetra ultrices.
          </h2>
          <p>
            Ut eu urna enim. Curabitur <br /> posuere fermentum libero,
            <br /> pretium dignissim est lacinia <br /> nec. Aenean dapibus ante
            sed <br /> pharetra scelerisque.
          </p>
        </div>
      </div>
      <div className="related">
        <h1>Related products</h1>
        <div className="container2 ooh">
          <div>
            <img src={top1} alt="" />
            <button>Sale!</button>
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} className="sta" icon={faStar} />
            ))}
            <h4>
              Multigroomer All-in-One <br /> Trimmer Series 5000, 23 <br />{" "}
              Piece Mens Grooming Kit
            </h4>
            <h4 className="hprice">
              <s className="strike">$49.00</s> $44.00
            </h4>
          </div>
          <div>
            <img src={ac4} alt="" />
            <button>Sale!</button>
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} className="sta" icon={faStar} />
            ))}
            <h4>
              Smart Speaker with Alexa <br /> Voice Control Built-in <br />{" "}
              Compact Size with <br />
              Incredible Sound for Any <br /> Room
            </h4>
            <h4 className="hprice">
              <s className="strike">$249.00</s> $219.00
            </h4>
          </div>
          <div>
            <img className="ac5" src={ac5} alt="" />
            <button>Sale!</button>
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} className="sta" icon={faStar} />
            ))}
            <h4>
              Home Speaker 500: Smart <br /> Bluetooth Speaker with <br /> Alexa
              Voice Control Built-In, <br /> White
            </h4>
            <h4 className="hprice">
              <s className="strike">$699.00</s> $659.00
            </h4>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
