import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from "../../assets/images";
import "./Banner.css"; // Import the CSS file

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "7%",
          transform: "translateY(-20%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white">
      <div className="banner-container">
        <Slider {...settings}>
          <Link to="/offer">
            <div>
              <img src={bannerImgOne} alt="Slide 1" className="banner-image" />
            </div>
          </Link>

          <Link to="/offer">
            <div>
              <img src={bannerImgTwo} alt="Slide 2" className="banner-image" />
            </div>
          </Link>

          <Link to="/offer">
            <div>
              <img src={bannerImgThree} alt="Slide 3" className="banner-image" />
            </div>
          </Link>

          <Link to="/offer">
            <div>
              <img src={bannerImgFour} alt="Slide 4" className="banner-image" />
            </div>
          </Link>

          <Link to="/offer">
            <div>
              <img src={bannerImgFive} alt="Slide 5" className="banner-image" />
            </div>
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
