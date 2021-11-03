import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import img1 from "../../../images/img/banner1e.jpg"
import img2 from "../../../images/img/banner4e.jpg"
import img3 from "../../../images/img/banner2e.jpg"

const Banner = () => {
    return (
 <div>
       <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption className="banner-text">
              <h1>24/7 MEDICAL CURE</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
                <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption className="banner-text">
          <h1>We use World's Best Technology </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption className="banner-text">
            <h1>We Have Free Medical Shop</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</div>
    )
};

export default Banner;