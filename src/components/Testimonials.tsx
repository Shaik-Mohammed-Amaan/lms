"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData from "@/mockdata/testimonials_data.json";
import Image from "next/image";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="px-4 py-10 bg-[#D1D1D1] bg-opacity-30">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">What People Say?</h2>
        </div>
        <div>
          <Slider {...settings}>
            {testimonialsData.testimonials.map((data) => (
              <aside key={data.id} className="p-4">
                <div className="flex flex-col gap-4 justify-center items-center border border-black bg-white rounded-md p-8">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 559.27 546.15"
                    width={40}
                    height={40}
                    fill="#5652E9"
                  >
                    <path d="M336.63,250.54V33.44H553.71v217.1S587.7,503,364.37,512.71V392s85.76,35.63,74.55-141.49Z" />
                    <path d="M3.71,250.54V33.44H220.79v217.1S254.78,503,31.46,512.71V392S117.21,427.66,106,250.54Z" />
                  </svg>

                  <p className="text-sm italic text-center py-5">
                    {data.review}
                  </p>

                  <Image
                    src={`/${data.image}`}
                    alt="user"
                    width={50}
                    height={50}
                  />
                  <h3>{data.name}</h3>
                </div>
              </aside>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
