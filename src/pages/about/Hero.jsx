import aboutpic from "../../pictures/aboutpic.png";
import aboutpic2 from "../../pictures/aboutpic2.jpg";
import aboutpic3 from "../../pictures/aboutpic3.jpg";
import aboutpic4 from "../../pictures/aboutpic5.jpg";
import aboutpic5 from "../../pictures/aboutpic4.jpg";
import aboutpic6 from "../../pictures/aboutpic6.jpg";
import aboutpic7 from "../../pictures/aboutpic7.jpg";
import aboutpic8 from "../../pictures/aboutpic8.jpg";
import aboutpic9 from "../../pictures/aboutpic9.jpg";
import aboutpic10 from "../../pictures/aboutpic10.jpg";
import off1 from "../../pictures/off1.jpg";
import counter from "../../pictures/counter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faMapMarkerAlt,
faEnvelope,
  faPhone,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faFile as faFileRegular } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsUpRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faDribbble,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";


export default function AboutHeroSection() {
  const [counterUp,setCounterUp]=useState(false)
  return (
    <body>
      <div className="abt">
        <img src={off1} alt="" />
        <h1>About Us</h1>
        <h4>
          A wonderful serenity has taken possession of my entire soul, like
          these <br /> sweet mornings of spring which I enjoy with my whole
          heart.
        </h4>
        <Link to="/shopping-page">
          <button className="disc-btn">DISCOVER NOW</button>
        </Link>
      </div>
      <div className="aboutpage">
        <div className="aboutext">
          <h2>ABOUT OUR ONLINE STORE</h2>
          <h1>
            Hello, <br /> With 25+ Years Of Experience
          </h1>
          <h3>
            Over 25 years Dukamarket helping companies reach their <br />{" "}
            financial and branding goals.
          </h3>
          <p>
            The perfect way to enjoy brewing tea on low hanging fruit to
            identify. Duis autem <br /> vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum <br /> dolore eu
            feugiat nulla facilisis. For me, the most important part of
            improving at <br /> photography.
          </p>
        </div>
        <img src={aboutpic} alt="" />
      </div>
      <div className="workscontainer">
        <div className="works">
          <h2>HOW IT WORKS</h2>
          <h1>Complete Customer Ideas</h1>
          <h4>
            The perfect way to enjoy brewing tea on low hanging fruit to
            identify. Duis autem vel eum iriure dolor in hendrerit <br /> in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis.
          </h4>
        </div>
      </div>
      <div className="aboutcontainer3">
        <div className="ideabox">
          <div className="files">
            <FontAwesomeIcon className="fashare" icon={faShareSquare} />
            <h1>01</h1>
          </div>
          <h2>Admin Verify Details</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit accusantium
            doloremque laudantium totam rem aperiam, eaqueipsa quae veritatis.
          </p>
        </div>
        <div className="ideabox">
          <div className="files">
            <FontAwesomeIcon className="fashare" icon={faFileRegular} />
            <h1>02</h1>
          </div>
          <h2>Send The Solution</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit accusantium
            doloremque laudantium totam rem aperiam, eaqueipsa quae veritatis.
          </p>
        </div>
        <div className="ideabox">
          <div className="files">
            <FontAwesomeIcon className="fashare" icon={faThumbsUpRegular} />
            <h1>03</h1>
          </div>
          <h2>Complete Profile</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit accusantium
            doloremque laudantium totam rem aperiam, eaqueipsa quae veritatis.
          </p>
        </div>
      </div>
      <div className="index">
        <div className="indextext">
          <h2>TECHNOLOGY INDEX</h2>
          <h1>Let’s Get Creative</h1>
          <p>
            The perfect way to enjoy brewing tea on low hanging fruit to
            identify. Duis autem vel eum iriure dolor in hendrerit <br /> in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis.
          </p>
        </div>
        <div className="indeximg">
          <img src={aboutpic2} alt="" />
          <img src={aboutpic3} alt="" />
        </div>
        <div className="numcount">
          <ScrollTrigger
            onEnter={() => setCounterUp(true)}
            onExit={() => setCounterUp(false)}
          >
            <div className="clients">
              <div className="counte">
                <img src={counter} alt="" />
                <h1>
                  {counterUp && (
                    <CountUp start={0} end={8265} duration={2} delay={0} />
                  )}
                  +
                </h1>
              </div>
              <h2>Active Clients</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus sit accusantium
                doloremque <br /> laudantium totam.
              </p>
            </div>
          </ScrollTrigger>
          <div className="clients">
            <div className="counte">
              <img src={counter} alt="" />
              <h1>
                {counterUp && (
                  <CountUp start={0} end={4268} duration={2} delay={0} />
                )}
                +
              </h1>
            </div>
            <h2>Projects Done</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus sit accusantium
              doloremque <br /> laudantium totam.
            </p>
          </div>
          <div className="clients">
            <div className="counte">
              <img src={counter} alt="" />
              <h1>
                {counterUp && (
                  <CountUp start={0} end={643} duration={2} delay={0} />
                )}
                <span>+</span>
              </h1>
            </div>
            <h2>Team Advisors</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus sit accusantium
              doloremque <br /> laudantium totam.
            </p>
          </div>
          <div className="clients">
            <div className="counte">
              <img src={counter} alt="" />
              <h1>
                {counterUp && (
                  <CountUp start={0} end={269} duration={2} delay={0} />
                )}
                <span>k</span>
              </h1>
            </div>
            <h2>Users Online</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus sit accusantium
              doloremque <br /> laudantium totam.
            </p>
          </div>
        </div>
      </div>
      <div className="teamcontainer">
        <div className="teamtext">
          <h1>THE TEAM</h1>
          <h2>Meet Our Team</h2>
          <p>
            The perfect way to enjoy brewing tea on low hanging fruit to
            identify. Duis autem vel eum iriure dolor in hendrerit <br /> in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis.
          </p>
          <div className="founderimg">
            <div>
              <img src={aboutpic4} alt="" />
              <h1>ROBIN GOMES</h1>
              <h3>CEO & Founder</h3>
              <div>
                <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                <FontAwesomeIcon className="social-icon" icon={faDribbble} />
                <FontAwesomeIcon className="social-icon" icon={faYoutube} />
              </div>
            </div>
            <div>
              <img src={aboutpic5} alt="" />
              <h1>IQBAL HOSSAIN</h1>
              <h3>CEO & Founder</h3>
              <div>
                <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                <FontAwesomeIcon className="social-icon" icon={faDribbble} />
                <FontAwesomeIcon className="social-icon" icon={faYoutube} />
              </div>
            </div>
            <div>
              <img src={aboutpic6} alt="" />
              <h1>MERRY BOB</h1>
              <h3>CEO & Founder</h3>
              <div>
                <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                <FontAwesomeIcon className="social-icon" icon={faDribbble} />
                <FontAwesomeIcon className="social-icon" icon={faYoutube} />
              </div>
            </div>
          </div>
        </div>
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
              <FontAwesomeIcon className="falocation" icon={faMapMarkerAlt} />
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
              <FontAwesomeIcon className="falocation" icon={faEnvelope} />
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
              <FontAwesomeIcon className="falocation" icon={faMapMarkerAlt} />
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
              <FontAwesomeIcon className="falocation" icon={faEnvelope} />
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
              <FontAwesomeIcon className="falocation" icon={faMapMarkerAlt} />
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
              <FontAwesomeIcon className="falocation" icon={faEnvelope} />
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
              <FontAwesomeIcon className="falocation" icon={faMapMarkerAlt} />
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
              <FontAwesomeIcon className="falocation" icon={faEnvelope} />
              <div>
                <h3>Mail us</h3>
                <a href="">store@company.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
