import aboutpic7 from "../pictures/aboutpic7.jpg";
import aboutpic8 from "../pictures/aboutpic8.jpg";
import aboutpic9 from "../pictures/aboutpic9.jpg";
import aboutpic10 from "../pictures/aboutpic10.jpg";
import off2 from "../pictures/off2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faFile,
  faThumbsUp,
  faLocationDot,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import HeaderPage from "../components/header";
import FooterPage from "../components/footer";

export default function ContactSection() {
  return (
    <>
      <HeaderPage />
      <div className="contacttext">
        <img src={off2} alt="" />
        <h1>Contact Us</h1>
        <h2>
          <span>Home / </span>Contact Us
        </h2>
      </div>
      <div className="locationcontainer">
        <div className="locationtext">
          <h2>LOCATION STORE</h2>
          <h1>Where We Are</h1>
          <p>
            The perfect way to enjoy brewing tea on low hanging fruit to
            identify. Duis autem vel eum iriure dolor in hendrerit <br /> in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis.
          </p>
        </div>
        <div className="locationimg">
          <div className="locationitems">
            <img src={aboutpic7} alt="" />
            <h1>26 Rue Pelleport - Paris</h1>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faLocationDot} />
              <div>
                <h3>Find us</h3>
                <h2>Rue Saint-Antoine, Paris, France</h2>
              </div>
            </div>
            <div className="lyn"></div>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faPhone} />
              <div>
                <h3>Call us</h3>
                <a href="">(+100) 123 456 7890</a>
              </div>
            </div>
            <div className="lyn"></div>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faMailForward} />
              <div>
                <h3>Mail us</h3>
                <a href="">store@company.com</a>
              </div>
            </div>
          </div>
          <div className="locationitems">
            <img src={aboutpic8} alt="" />
            <h1>150 Stanley Rd - Londons</h1>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faLocationDot} />
              <div>
                <h3>Find us</h3>
                <h2>Brick Ln, Spitalfields, London E1, UK</h2>
              </div>
            </div>
            <div className="lyn"></div>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faPhone} />
              <div>
                <h3>Call us</h3>
                <a href="">(+100) 123 456 7890</a>
              </div>
            </div>
            <div className="lyn"></div>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faMailForward} />
              <div>
                <h3>Mail us</h3>
                <a href="">store@company.com</a>
              </div>
            </div>
          </div>
          <div className="locationitems">
            <img src={aboutpic9} alt="" />
            <h1>1357 Prospect - New York</h1>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faLocationDot} />
              <div>
                <h3>Find us</h3>
                <h2>Atlantic, Brooklyn, New York, US</h2>
              </div>
            </div>
            <div className="lyn"></div>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faPhone} />
              <div>
                <h3>Call us</h3>
                <a href="">(+100) 123 456 7890</a>
              </div>
            </div>
            <div className="lyn"></div>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faMailForward} />
              <div>
                <h3>Mail us</h3>
                <a href="">store@company.com</a>
              </div>
            </div>
          </div>
          <div className="locationitems">
            <img src={aboutpic10} alt="" />
            <h1>86 Georgia Rd - Mardrid</h1>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faLocationDot} />
              <div>
                <h3>Find us</h3>
                <h2>Calle del Correo, 4, Madrid, Spain</h2>
              </div>
            </div>
            <div className="lyn"></div>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faPhone} />
              <div>
                <h3>Call us</h3>
                <a href="">(+100) 123 456 7890</a>
              </div>
            </div>
            <div className="lyn"></div>
            <div className="locay">
              <FontAwesomeIcon className="falocation" icon={faMailForward} />
              <div>
                <h3>Mail us</h3>
                <a href="">store@company.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
