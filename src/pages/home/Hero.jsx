import case1 from "../../pictures/case1.jpg";
import card2 from "../../pictures/card2.jpg";
import case2 from "../../pictures/case2.jpg";
import case3 from "../../pictures/case3.jpg";
import case4 from "../../pictures/case4.jpg";
import top1 from "../../pictures/top1.jpg";
import top2 from "../../pictures/top2.jpg";
import top4 from "../../pictures/top4.jpg";
import top7 from "../../pictures/top7.jpg";
import ac4 from "../../pictures/ac4.jpg";
import ac6 from "../../pictures/ac6.jpg";
import ac8 from "../../pictures/ac8.jpg";
import ac7 from "../../pictures/ac7.jpg";
import ac5 from "../../pictures/ac5.jpg";
import ac9 from "../../pictures/ac9.jpg";
import ac10 from "../../pictures/ac10.jpg";
import dp1 from "../../pictures/dp1.jpg";
import dp2 from "../../pictures/dp2.jpg";
import dp3 from "../../pictures/dp3.jpg";
import dp4 from "../../pictures/dp4.jpg";
import dp5 from "../../pictures/dp5.jpg";
import dp6 from "../../pictures/dp6.jpg";
import jp1 from "../../pictures/jp1.png";
import jp2 from "../../pictures/jp2.png";
import jp3 from "../../pictures/jp3.png";
import pic3 from "../../pictures/pic3.png";
import img1 from "../../pictures/airpods.jpg";
import img2 from "../../pictures/img2.avif";
import img3 from "../../pictures/img3.jpg";
import px1 from "../../pictures/px1.jpg";
import px2 from "../../pictures/px2.jpg";
import px3 from "../../pictures/px3.jpg";
import px4 from "../../pictures/px4.jpg";
import px5 from "../../pictures/px5.jpg";
import px6 from "../../pictures/px6.jpg";
import px7 from "../../pictures/px7.jpg";
import px8 from "../../pictures/px8.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCommentDots,
  faArrowRotateLeft,
  faCreditCard,
  faStar,
  faMessage,faBasketShopping
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { useState,useEffect } from "react";

export default function HeroSection({ products }) {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length); // Loop through slides
      }, 4000); // Same as autoplaySpeed
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  // Sliders
  const settingsTwo = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setActiveIndex(next), // Update active index
  };

  const settings = {
    //  dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const productsTwo = [
    {
      id: 21,
      image: px1,
      title: "AIR CONDITIONER",
      productCount: 5,
      path: "/Item1",
    },
    {
      id: 22,
      image: px2,
      title: "AUDIO & VIDEO",
      productCount: 5,
      path: "/Item2",
    },
    { id: 23, image: px3, title: "GADGETS", productCount: 6, path: "/Item3" },
    {
      id: 24,
      image: px4,
      title: "HOME APPLIANCES",
      productCount: 4,
      path: "/Item4",
    },
    {
      id: 25,
      image: px5,
      title: "KITCHEN APPLIANCES",
      productCount: 6,
      path: "/Item5",
    },
    {
      id: 26,
      image: px6,
      title: "PCS & LAPTOPS",
      productCount: 4,
      path: "/Item6",
    },
    {
      id: 27,
      image: px7,
      title: "REFRIGERATOR",
      productCount: 5,
      path: "/Item7",
    },
    {
      id: 28,
      image: px8,
      title: "SMART HOME",
      productCount: 5,
      path: "/Item8",
    },
  ];

  const productsThree = [
    {
      id: 1,
      img: ac6,
      hoverImg: top1,
      title:
        "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
      originalPrice: 749.0,
      salePrice: 644.0,
    },
    {
      id: 2,
      img: top2,
      hoverImg: ac4,
      title:
        "Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
      originalPrice: 849.0,
      salePrice: 805.0,
    },
    {
      id: 3,
      img: top2,
      hoverImg: ac5,
      title:
        "Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
      originalPrice: 949.0,
      salePrice: 900.0,
    },
    {
      id: 4,
      img: top4,
      hoverImg: ac6,
      title:
        "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
      originalPrice: 1749.0,
      salePrice: 1650.0,
    },
    {
      id: 5,
      img: top4,
      hoverImg: ac7,
      title:
        "5G Unlocked Smartphone, 12GB RAM + 256GB Storage 120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
      originalPrice: 1449.0,
      salePrice: 1404.0,
    },

    {
      id: 6,
      img: top4,
      hoverImg: ac8,
      title:
        "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
      originalPrice: 449.0,
      salePrice: 404.0,
    },
    {
      id: 7,
      img: top7,
      hoverImg: ac9,
      title:
        "13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
      originalPrice: 649.0,
      salePrice: 544.0,
    },
    {
      id: 8,
      img: top7,
      hoverImg: ac10,
      title:
        "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11, Grey",
      originalPrice: 499.0,
      salePrice: 404.0,
    },
  ];

  const slideProducts = [
    {
      img: img1,
      sale: "30%",
      title: "SAMSUNG GALAXY",
      subtitle: "BUDS",
      discount: 30,
    },
    {
      img: img2,
      sale: "20%",
      title: "FUTURE FOOTBALL",
      subtitle: "BOOTS",
      discount: 20,
    },
    {
      img: img3,
      sale: "30%",
      title: "FUTURE FOOTBALL",
      subtitle: "BOOTS",
      discount: 30,
    },
  ];
  return (
    <>
      <section className="bodysection">
        <section>
          <div className="custom-slider-container">
            <Slider {...settingsTwo}>
              {slideProducts.map((product, index) => (
                <div
                  key={index}
                  className={`slide-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <img
                    className="slider-image1"
                    src={product.img}
                    alt={`Slide ${index + 1}`}
                  />
                  <div className="slide-content">
                    <button className="hot-deals-button">
                      <a href="#">Hot Deals</a>
                    </button>
                    <h1>SALE {product.sale} OFF</h1>
                    <h1 className="slider-title1">{product.title}</h1>
                    <h1 className="slider-subtitle">{product.subtitle}</h1>
                    <h2>
                      Discount {product.discount}% On Products & Free Shipping
                    </h2>
                    <button className="discover-button">
                      <a href="#">Discover Now</a>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="box">
            <div className="truckbox">
              <FontAwesomeIcon className="truck" icon={faTruck} />
              <div>
                <h3>Free shipping</h3>
                <p>When you spend $120 or more</p>
              </div>
            </div>
            <div className="vert plus"></div>
            <div className="truckbox">
              <FontAwesomeIcon className="truck" icon={faCommentDots} />
              <div>
                <h3>We are available 24/7</h3>
                <p>Need help? contact us anytime</p>
              </div>
            </div>
            <div className="vert plus"></div>
            <div className="truckbox">
              <FontAwesomeIcon className="truck" icon={faArrowRotateLeft} />
              <div>
                <div>
                  <h3>Satisfied or return</h3>
                  <p>Easy 30-day return policy</p>
                </div>
              </div>
            </div>
            <div className="vert plus"></div>
            <div className="truckbox">
              <FontAwesomeIcon className="truck" icon={faCreditCard} />
              <div>
                <h3>100% secure payments</h3>
                <p>Visa, Mastercard, Stripe, PayPal</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container1">
            {productsTwo.map(({ id, image, title, productCount, path }) => (
              <Link key={id} to={path}>
                <div className="imgcunt">
                  <img src={image} alt={title} />
                  <h4>{title}</h4>
                  <p>{productCount} PRODUCTS</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="case">
            <div className="casee">
              <img src={case3} alt="" />
              <h2>
                Intelligent Touch <br /> Control
              </h2>
              <h3>Discount 20% on Products</h3>
            </div>
            <div className="casee">
              <img src={case2} alt="" />
              <h2>
                On Sales <br /> Best Prices
              </h2>
              <h3>Limited time:Online Buying</h3>
            </div>
            <div className="casee">
              <img src={case1} alt="" />
              <h2>Hot Sale</h2>
              <h3>Super Laptop 2022</h3>
              <h3>Free Shipping All Order</h3>
            </div>
          </div>
        </section>
        <section className="topsection">
          <h2>
            Today's Best Deals <a href="">See More</a>
          </h2>
          <div className="container2">
            {productsThree.map((product) => (
              <Link key={product.id} to="/item-cart">
                <div>
                  <div className="todaybutton">
                    <img className="imghov" src={product.hoverImg} alt="" />
                    <img
                      className="imgtoday"
                      src={product.img}
                      alt={product.title}
                    />
                    <button>Sale!</button>
                    <FontAwesomeIcon
                      className="basket"
                      icon={faBasketShopping}
                    />
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          className="stam"
                          icon={faStarOutline}
                        />
                      ))}
                      <h4>{product.title}</h4>
                      <h4 className="hprice">
                        <s className="strike">${product.originalPrice}</s> $
                        {product.salePrice}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="case2">
            <div className="backk back1">
              <h1>
                Wireless <br /> headphones
              </h1>
              <h3>Starting at $49</h3>
              <a href="">Shop now</a>
              <div>
                <img src={jp1} alt="" />
              </div>
            </div>
            <div className="backk back2">
              <h1>Grooming</h1>
              <h3>Starting at $49</h3>
              <a href="">Shop now</a>
              <div>
                <img src={jp2} alt="" />
              </div>
            </div>
            <div className="backk back3">
              <h1>
                Video <br /> games
              </h1>
              <h3>Starting at $49</h3>
              <a href="">Shop now</a>
              <div>
                <img src={jp3} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="fridgetext">
            <div className="subfridgetext">
              <h2>Brand's Deal</h2>
              <h1>
                Save up to $200 on select <br /> Samsung washing machine
              </h1>
              <h2>Tortor purus et quis aenean tempus tellus fames.</h2>
              <a href="">Shop now</a>
            </div>
            <div>
              <img src={case4} alt="" />
            </div>
          </div>
          <div className="card2">
            <img src={card2} alt="" />
          </div>
        </section>
        <div className="slider-container">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="slider-item">
                <img
                  src={product.img}
                  alt={product.name}
                  className="slider-image"
                />
                <div className="slider-info">
                  <h3 className="slider-title">{product.name}</h3>
                  <p className="slider-price">${product.salePrice}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <section className="reviewsec">
          <h1>What is everyone saying?</h1>
          <div className="review">
            <div className="starsec">
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <h2>
                Dolores porro laboriosam molestias est quo. Et et eos. Ab error
                modi labore sed eaque est. Quaerat aut est fugiat.
              </h2>
              <div className="dp">
                <img src={dp1} alt="" />
                <h2>Rafael Stokes</h2>
              </div>
            </div>
            <div className="starsec">
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <h2>
                Dolorem et cumque consequuntur consequuntur cumque eligendi
                voluptate. Tempore accusamus tempore consectetur.
              </h2>
              <div className="dp">
                <img src={dp2} alt="" />
                <h2>Chelsea Turner</h2>
              </div>
            </div>
            <div className="starsec">
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <h2>
                Et eum neque ipsum quaerat ratione qui dolore eos. Numquam quo
                vel amet expedita eius facere minima. Dolor et saepe
                consequuntur.
              </h2>
              <div className="dp">
                <img src={dp3} alt="" />
                <h2>Jacqueline Mueller</h2>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="starsec starsec2">
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <h2>
                Dolores porro laboriosam molestias est quo. Et et eos. Ab error
                modi labore sed eaque est. Quaerat aut est fugiat.
              </h2>
              <div className="dp">
                <img src={dp4} alt="" />
                <h2>Olive Borer</h2>
              </div>
            </div>
            <div className="starsec starsec2">
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <h2>
                Dolorem et cumque consequuntur consequuntur cumque eligendi
                voluptate. Tempore accusamus tempore consectetur.
              </h2>
              <div className="dp">
                <img src={dp5} alt="" />
                <h2>Priscilla Jacobson</h2>
              </div>
            </div>
            <div className="starsec starsec2">
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <FontAwesomeIcon className="starr" icon={faStar} />
              <h2>
                Et eum neque ipsum quaerat ratione qui dolore eos. Numquam quo
                vel amet expedita eius facere minima. Dolor et saepe
                consequuntur.
              </h2>
              <div className="dp">
                <img src={dp6} alt="" />
                <h2>Joseph Reinger</h2>
              </div>
            </div>
          </div>
        </section>
        <div className="blueback">
          <h2>
            Free UK Delivery - Return Over $100.00 ( Excluding Homeware ) | Free
            UK Collect From Store
          </h2>
          <h2> Design Week / 15% Off the website / Code: AYOSALE-2020</h2>
          <h2> Always iconic. Now organic. Introducing the $20 Organic Tee.</h2>
        </div>
        <section>
          <div className="threeguys">
            <div className="liner2"></div>
            <div className="set3container">
              <div className="set3">
                <a className="alive" href="">
                  Expert Advice
                </a>
                <h2>123-456-7890</h2>
              </div>
              <div className="set3">
                <a className="alive" href="">
                  Customer Service
                </a>
                <h2>1-222-345-6789</h2>
              </div>
              <div className="set3">
                <a className="alive" href="">
                  Have any questions?
                </a>
                <h2>Contact Us</h2>
              </div>
              <img src={pic3} alt="" />
            </div>
            <div className="subscribe">
              <div className="subsubscribe">
                <div className="lettersub">
                  <FontAwesomeIcon className="famess" icon={faMessage} />
                  <h2>
                    Subscribe to our Newsletter
                  </h2>
                </div>
                <div className="lyyn"></div>
                <h3>
                  Sign up for all the latest news and special offers
                </h3>
              </div>
              <div className="inbutt">
                <input type="email" name="" id="" placeholder="Enter Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
