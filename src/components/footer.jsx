import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import pay1 from "../pictures/pay1.png";
import { Link } from "react-router-dom";


export default function FooterPage() {
  return (
    <>
      <footer>
        <div className="footcontainer">
          <div className="footer-column">
            <h1>Customer Care</h1>
            <h3>New Customers</h3>
            <h3>How to use Account</h3>
            <h3>Placing an Order</h3>
            <h3>Payment Methods</h3>
            <h3>Delivery & Dispatch</h3>
            <h3>Problems with Order</h3>
          </div>
          <div className="footer-column">
            <h1>Customer Service</h1>
            <h3>Help Center</h3>
            <h3>Contact Us</h3>
            <h3>Report Abuse</h3>
            <h3>Submit a Dispute</h3>
            <h3>Policies & Rules</h3>
          </div>
          <div className="footer-column">
            <h1>My Account</h1>
            <h3>Product Support</h3>
            <h3>Checkout</h3>
            <h3>Shopping Cart</h3>
            <h3>Wishlist</h3>
            <h3>Terms & Conditions</h3>
            <h3>Redeem Voucher</h3>
          </div>
          <div className="footer-column">
            <h1>Quicklinks</h1>
            <h3>
              <Link to="/my-account">My Account</Link>
            </h3>
            <h3>
              <Link to="/contact-us">Order Tracking</Link>
            </h3>
            <h3>
              <Link to="/faqs">FAQs</Link>
            </h3>
            <h3>Store Location</h3>
          </div>
          <div className="aboutstore">
            <h1>About The Store</h1>
            <h4>
              Our mission statement is to provide <br />
              the absolute best customer <br />
              experience available in the Electronic <br />
              industry without exception.
            </h4>
            <div className="headset">
              <FontAwesomeIcon className="set" icon={faHeadset} />
              <div>
                <h2>
                  Got Questions? Call us <br /> 24/7!
                </h2>
                <h1>(+100) 123 456 7890</h1>
              </div>
            </div>
            <h4>
              Add: Walls Street 68, Manhattan,
              <br /> New York, USA
            </h4>
          </div>
        </div>
        <hr />
        <div className="atagmyfoot">
          <a href="">Online Shopping</a>
          <span className="slash">/</span>
          <a href="">Promotion</a>
          <span className="slash">/</span>
          <a href="">My Orders</a>
          <span className="slash">/</span>
          <a href="">Help</a>
          <span className="slash">/</span>
          <a href="">Customer Service</a>
          <span className="slash">/</span>
          <a href="">Support</a>
          <span className="slash">/</span>
          <a href="">Most Popular</a>
          <span className="slash">/</span>
          <a href="">New Arrivals</a>
          <span className="slash">/</span>
          <a href="">Special Product</a>
          <span className="slash">/</span>
          <a href="">Manufacturers</a>
          <span className="slash">/</span>
          <a href="">Garden Equipments</a>
          <span className="slash">/</span>
          <a href="">Powers And Hand Tools</a>
          <span className="slash">/</span>
          <a href="">Utensils And Gadgets</a>
          <span className="slash">/</span>
          <a href="">Printers</a>
          <span className="slash">/</span>
          <a href="">Projectors</a>
          <span className="slash">/</span>
          <a href="">Scanners</a>
          <span className="slash">/</span>
          <a href="">Store</a>
          <span className="slash">/</span>
          <a href="">Business</a>
        </div>
        <div className="paypal">
          <img src={pay1} alt="Payment Methods" />
        </div>
        <div className="copyright">
          <h2>
            Copyright © <span>DukaMarket.</span> All Rights Reserved. Powered by{" "}
            <a href="">Theme_Pure.</a>
          </h2>
        </div>
      </footer>
    </>
  );
}
