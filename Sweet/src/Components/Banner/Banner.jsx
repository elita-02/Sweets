import React from "react";
import Carousel from "react-bootstrap/Carousel";
import one from "../../assets/img/imageone.png";
import two from "../../assets/img/imagetwo.png";
import three from "../../assets/img/imagethree.png"; // "tree" -> "three"
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner containeк">
      <div className="carousel ">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={one} alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={two} alt="Second slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={three} alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
