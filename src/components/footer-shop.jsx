import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import pay1 from "../pictures/pay1.png";
import { Link } from "react-router-dom";

export default function FooterShopPage() {
  return (
    <>
      <div className="footer">
        <div className="footcontainer">
          <div>
            <h1>Customer Care</h1>
            <h3>New Customers</h3>
            <h3>How to use Account</h3>
            <h3>Placing an Order</h3>
            <h3>Payment Methods</h3>
            <h3>Delivery & Dispatch</h3>
            <h3>Problems with Order</h3>
          </div>
          <div>
            <h1>Customer Service</h1>
            <h3>Help Center</h3>
            <h3>Contact Us</h3>
            <h3>Report Abuse</h3>
            <h3>Submit a Dispute</h3>
            <h3>Policies & Rules</h3>
          </div>
          <div>
            <h1>My Account</h1>
            <h3>Product Support</h3>
            <h3>Checkout</h3>
            <h3>Shopping Cart</h3>
            <h3>Wishlist</h3>
            <h3>Terms & Conditions</h3>
            <h3>Redeem Voucher</h3>
          </div>
          <div>
            <h1>Quicklinks</h1>
            <h3>Store Location</h3>
            <Link to="/my-account">
              <h3>My Account</h3>
            </Link>
            <Link to="/contact-us">
              <h3>Order Tracking</h3>
            </Link>
            <Link to="/faqs">
              <h3>FAQS</h3>
            </Link>
          </div>
          <div className="aboutstore">
            <h1>About The Store</h1>
            <h4>
              Our mission statement is to provide <br /> the absolute best
              customer <br />
              experience available in the Electronic <br /> industry without
              exception.
            </h4>
            <div className="headset">
              <FontAwesomeIcon className="set" icon={faHeadset} />
              <div>
                <h2>
                  Got Question? Call us <br /> 24/7!
                </h2>
                <h1>(+100) 123 456 7890</h1>
              </div>
            </div>
            <h4>
              Add: Walls Street 68, Mahattan,
              <br /> New York, USA
            </h4>
          </div>
        </div>
        <div className="liner"></div>
        <div className="atagmyfoot">
          <a href="">
            Online Shopping <span className="slash">/</span>
          </a>
          <a href="">
            Promotion <span className="slash">/</span>
          </a>
          <a href="">
            My Orders <span className="slash">/</span>
          </a>
          <a href="">
            Help <span className="slash">/</span>
          </a>
          <a href="">
            Customer Service <span className="slash">/</span>
          </a>
          <a href="">
            Support <span className="slash">/</span>
          </a>
          <a href="">
            Most Popular <span className="slash">/</span>
          </a>
          <a href="">
            New Arrivals <span className="slash">/</span>
          </a>
          <a href="">
            Special Product <span className="slash">/</span>
          </a>
          <a href="">
            Manufacturers <span className="slash">/</span>
          </a>
          <div className="atagmyfoot2">
            <a href="">
              Garden Equipments <span className="slash">/</span>
            </a>
            <a href="">
              Powers And Hand Tools <span className="slash">/</span>
            </a>
            <a href="">
              Utensils And Gadgets <span className="slash">/</span>
            </a>
            <a href="">
              Printers <span className="slash">/</span>
            </a>
            <a href="">
              Projectors <span className="slash">/</span>
            </a>
            <a href="">
              Scanners <span className="slash">/</span>
            </a>
            <a href="">
              Store <span className="slash">/</span>
            </a>
            <a href="">
              Business <span className="slash">/</span>
            </a>
            <div className="paypal">
              <img src={pay1} alt="" />
            </div>
            <div className="copyright">
              <h2>
                Copyright © <span>DukaMarket.</span> All Rights Reserved.
                Powered by <a href=""> Theme_Pure.</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
