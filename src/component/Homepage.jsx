import React, { useEffect } from "react";
import Bitmap from "../static/images/Bitmap-4.png";
import RightArrow from "../static/images/Combined_Shape.png";
import LeftArrow from "../static/images/Combined_Shape-left.png";
import Gallery1 from "../static/images/Bitmap-1.png";
import Gallery2 from "../static/images/Bitmap-2.png";
import Gallery3 from "../static/images/Bitmap-3.png";
import Gallery4 from "../static/images/Bitmap.png";

let index = 0;
function Homepage(props) {
  //small code for making carousel slide to work but no distinct pictures to do that
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides[index].classList.add("background");
    setInterval(() => {
      flipSlide(index);
      index++;
      if (index >= slides.length) {
        index = 0;
      }
    }, 3000);
  }, []);

  const flipSlide = (n) => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      slide.classList.remove("background");
    });
    slides[n].classList.add("background");
  };

  return (
    <React.Fragment>
      <section className="first-paragraph">
        <nav>
          <div className="social-media-part">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>
          <div className="first-part">
            <ul>
              <li>SHOP</li>
              <li>PLAN MY KITCHEN</li>
            </ul>
          </div>
          <div className="logo-part">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="second-part">
            <ul>
              <li>ABOUT US</li>
              <li>GALLERY</li>
            </ul>
          </div>
          <div className="cart-part">
            <div className="cart__order">
              <ul>
                <li>
                  MY ORDER <i className="fas fa-shopping-cart" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="main-content">
          <h5>Design and order your new kitchen online today</h5>
          <h3>Bespoke & made to measure handmade kitchen design</h3>
          <div className="order-box">
            <h4>order now</h4>
          </div>
        </div>
        <div className="slider-part">
          <span className="slide"></span>
          <span className="slide"></span>
          <span className="slide"></span>
        </div>
      </section>
      <section className="second-paragraph">
        <div className="first-slide">
          <img src={Bitmap} alt="bitmap" />
        </div>
        <div className="second-slide">
          <div className="text-box">
            <h5>Quality Craftmanship from build to delivery</h5>
            <h4>Discover the beauty of a handmade kitchen</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget est sit amet sapien venenatis maximus vel in urna. Nam mauris
              arcu, feugiat in finibus vitae, sollicitudin id purus. Ut
              imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
            </p>

            <div className="about-us">
              <p>about us</p>
            </div>
          </div>
        </div>
      </section>
      <section className="third-paragraph">
        <div className="customer-section">
          <div className="left-arrow">
            <img src={LeftArrow} alt="left" />
          </div>
          <div className="right-arrow">
            <img src={RightArrow} alt="left" />
          </div>
          <h5>What Our Customers Say</h5>
          <h4>Over 35 years experience designing handmade kitchens</h4>
          <p>
            Since my first contact I have received a very high level of customer
            service and advice with my kitchen plans. Ben responded very quickly
            to all of my emails and delivery of the kitchen was as planned.
          </p>
          <p>Jane, Dundee</p>
          <div className="mobile-scroll">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="frequent-asked">
            <p>frequent asked questions</p>
          </div>
        </div>
      </section>
      <section className="customer-gallery">
        <h5>Customer Gallery</h5>
        <div className="gallery-details">
          <div className="gallery">
            <img src={Gallery1} alt="gal1" />
          </div>
          <div className="gallery">
            <img src={Gallery2} alt="gal2" />
          </div>
          <div className="gallery">
            <img src={Gallery3} alt="gal3" />
          </div>
          <div className="gallery">
            <img src={Gallery4} alt="gal4" />
          </div>
        </div>
        <div className="view-more">
          <p>view more</p>
        </div>
      </section>
      <footer>
        <div className="content">
          <div className="line" />
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="list-item">
          <div className="about">
            <h4>About</h4>
            <ul>
              <li>shop</li>
              <li>planmy kitchen</li>
              <li>about us</li>
              <li>gallery</li>
            </ul>
          </div>
          <div className="service">
            <h4>Service</h4>
            <ul>
              <li>faq</li>
              <li>contact</li>
              <li>how to buy</li>
              <li>downloads</li>
            </ul>
          </div>
          <div className="info">
            <h4>Info</h4>
            <ul>
              <li>delivery</li>
              <li>terms</li>
              <li>privacy</li>
            </ul>
          </div>
          <div className="follow">
            <h4>Follow</h4>
            <div className="social-icon">
              <div className="icons">
                <i className="fab fa-facebook-f" />
              </div>
              <div className="icons">
                <i className="fab fa-twitter" />
              </div>
              <div className="icons">
                <i className="fab fa-instagram" />
              </div>
            </div>
          </div>
        </div>
        <p>
          Copyright Online MTC Home Kitchens 2018 - All rights reserved.
          Responsive website design, Development & Hosting by mtc.
        </p>
        <div className="close-content"></div>
      </footer>
    </React.Fragment>
  );
}

export default Homepage;
