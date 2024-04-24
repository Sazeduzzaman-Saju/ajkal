import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import "./Epaper.css";
import "react-calendar/dist/Calendar.css";
import { FacebookEmbed } from "react-social-media-embed";
import axios from "axios";
import { Link } from "react-router-dom";

function EPaper() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [epaperData, setEpaperData] = useState([]);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const urlEpaperData = "https://backoffice.ajkal.us/all-epapers";

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(urlEpaperData)
        .then((response) => {
          if (Array.isArray(response.data)) {
            setEpaperData(response.data.slice(0, 10));
          } else if (Array.isArray(response.data.data)) {
            setEpaperData(response.data.data.slice(0, 12));
          } else {
            console.error(
              "Invalid data structure in API response:",
              response.data
            );
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    const delay = 2000;
    const timer = setTimeout(() => {
      fetchData();
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container slider-container">
      <div className="row">
        <div className="col-lg-2 px-0 shadow-sm">
          <div className="mt-4">
            <div className="dropdown px-0">
              <Link
                to={"/date-wise-epaper"}
                className="btn btn-danger rounded-0 w-100 fw-bold"
              >
                আগের পত্রিকা
              </Link>
            </div>
          </div>
          <div className="">
            <div className="mt-2">
              <PostHeader title="ফিচারস" />
            </div>
            <p className="text-center fw-bold mb-0">আমাদের সাথে থাকুন।</p>
            <div
              className="my-2 pb-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FacebookEmbed
                url="https://www.facebook.com/photo/?fbid=979852766901979"
                width={305}
              />
            </div>
            <div>
              {/* Sidebar Advertisement */}
              <div className="mb-2">
                <img
                  className="img-fluid "
                  src="https://i.pinimg.com/originals/06/9d/61/069d617dca720be2d65014963515d28e.gif"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid "
                  src="https://i.pinimg.com/originals/6b/09/f8/6b09f8c066f90cc82af0b9f99cb401d5.gif"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid "
                  src="https://vriddle.com/wp-content/uploads/2018/04/JScrew-ice-cream-email-template.gif"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid "
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cdd8bd99001381.5ee904eb9b5ca.gif"
                  alt=""
                />
              </div>
              {/* Sidebar Advertisement End */}
            </div>
          </div>
        </div>
        <div className="col-lg-8 ">
          <div className="pt-4">
            <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
              {epaperData.map((item, index) => (
                <div key={index}>
                  <img
                    className="img-fluid"
                    src={`https://ajkal.us/img/epaper/${item.epaper_image}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-lg-2 px-0 shadow-sm">
          <div className="mt-2">
            <PostHeader title="সকল পাতা" />
          </div>
          <div className="epaper-thumbnail-scroll">
            <Slider
              className="flex-column"
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow="auto"
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
            >
              {epaperData.map((item, index) => (
                <div key={index}>
                  <img
                    className="img-fluid"
                    src={`https://ajkal.us/img/epaper/${item.epaper_image}`}
                  />
                  <p className="text-center mb-0">{item.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EPaper;
