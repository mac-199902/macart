import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Attended Bachelors Degree in Information Technology in University of Kigali from July 2022 to Present and I'll gain Bachelors Degree.",
    },
    {
      img: profilePic2,
      review:
        "Attended Advanced Diploma in Information Technology in IPRC Karongi from October 2018 to May 2022 and gained Advanced Diploma Certificate.",
    },
    {
      img: profilePic3,
      review:
        "Attended Advanced Level in Mathematic, Computer Science & Economic in E.S St JOSEPH Karuganda from January 2015 to November 2017 and awarded the Certificate.",
    },
    {
      img: profilePic4,
      review:
        "Attended Ordinary Level in ESSA Ruhengeri from January 2012 to November 2014 and gained the Certificate.",
    },
    {
      img: profilePic5,
      review:
        "Attended Primary School in Nyamagumba Primary School from January 2006 to November 2011 and awarded the Primary Certificate.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Here is  </span>
        <span>Schools </span>
        <span>that I attended...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
