import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Базовые стили Swiper (необходимы для логики перемещения)
import 'swiper/css';

import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import user3 from "../../../assets/user3.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import GetStarted from "../../../components/Buttons/GetStarted/GetStarted";

function Testimonials() {
  const testimonialsData = [
    { id: 1, avatar: user1, userName: "Victor Ya", city: "Тайланд", rating: "4.6", text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." },
    { id: 2, avatar: user2, userName: "Choco I Pai", city: "Shanxi, China", rating: "4.8", text: " ““I like it because I like to travel far and still can connect with high speed." },
    { id: 3, avatar: user3, userName: "Kon Che Nyi", city: "Seoul, South Korea", rating: "4.9", text: "““This is very unusual for my business that currently requires a virtual private network that has high security.”.”" },
    { id: 4, avatar: user3, userName: "Kon Che Nyi", city: "Seoul, South Korea", rating: "4.9", text: "“This is very unusual for my business...”" },
    { id: 5, avatar: user3, userName: "Kon Che Nyi", city: "Seoul, South Korea", rating: "4.9", text: "“This is very unusual for my business...”" },
    { id: 6, avatar: user3, userName: "Kon Che Nyi", city: "Seoul, South Korea", rating: "4.9", text: "“This is very unusual for my business...”" },
  ];

  return (
    <section id="testimonials">
      <div className="container">
        <div className="testimonials">
          <div className="testimonials-table">
            <h1>Trusted by Thousands of <br /> Happy Customer</h1>
            <p>These are the stories of our customers who have joined us...</p>
          </div>

          <div className="slider-container">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              pagination={{
                el: ".pagination-dots", 
                clickable: true,
                renderBullet: function (index, className) {
                  return `<li class="${className}"></li>`;
                }
              }}
              className="testimonial-cards"
              slidesPerView={3}
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard infoTestimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="pagination-wrapper">
            <div className="pagination-container">
              <ul class="pagination-dots">
              </ul>
            </div>
            <div className="arrow-btn-container">
              <button className="prev-btn">
                <FaArrowLeftLong className="arrow-icon" />
              </button>
              <button className="next-btn">
                <FaArrowRightLong className="arrow-icon" />
              </button>
            </div>
          </div>

          <div className="subscribe-container">
            <div className="subscribe-table">
              <h1>Subscribe Now for <br /> Get Special Features!</h1>
              <p>Let's subscribe with us and find the fun.</p>
            </div>
            <div>
              <GetStarted>Subscribe now</GetStarted>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;