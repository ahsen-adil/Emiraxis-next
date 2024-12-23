import Image from "next/image";
import React from "react";
import { Lora } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  { image: "/logo/logo1.png" },
  { image: "/logo/logo6.png" },
  { image: "/logo/logo7.png" },
  { image: "/logo/logo8.png" },
  { image: "/logo/logo9.png" },
  { image: "/logo/logo2.png" },
  { image: "/logo/logo3.png" },
  { image: "/logo/logo4.png" },
  { image: "/logo/logo5.png" },
];

const Brands = () => {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
      <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
        Clients
      </div>

      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        From small businesses to large corporations, we have helped many
        companies elevate their events.
      </p>

      <div className="mt-10 md:w-4/5 mx-auto relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="p-4">
                <Image
                  priority
                  src={logo.image}
                  width={600} // Increased width
                  height={600} // Increased height
                  alt={`Logo ${i + 1}`}
                  className="w-74 h-auto max-w-full rounded-lg" // Adjusted size
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          className="swiper-button-prev"
          style={{
            left: "-50px", // Move left arrow further outward
            color: "#fff",
            fontSize: "2rem", // Increase arrow size
          }}
        ></div>
        <div
          className="swiper-button-next"
          style={{
            right: "-50px", // Move right arrow further outward
            color: "#fff",
            fontSize: "2rem", // Increase arrow size
          }}
        ></div>
      </div>

      <div
        className={`flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8 text-center text-white ${font.className}`}
      >
        {/* Additional content can be added here */}
      </div>
    </div>
  );
};

export default Brands;
