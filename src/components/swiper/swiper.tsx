"use client";
import React, { useState, useEffect } from "react";
import { HiPlay } from "react-icons/hi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "./swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import instance from "@/config/api";
import { News } from "@/interfaces/index";

export default function Swipe() {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [data, setData] = useState<News[]>();
  const [currentVideo, setCurrentVideo] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get("news/");
      setData(response.data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper mt-7 text-white"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id} className="relative rounded-xl">
            <div className=" flex flex-col h-full">
              {item.id === currentVideo && isPlay === true ? (
                <div className=" w-full h-full relative">
                  <iframe
                    width="620"
                    height="350"
                    src={item.news_video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
              ) : (
                <div
                  className=" w-full h-full relative cursor-pointer items-center flex justify-center rounded-xl" 
                >
                   <button className="absolute z-50"
                    onClick={() => {
                    setCurrentVideo(item.id);
                    setIsPlay(true);
                  }}>
                    <HiPlay size={60} />
                  </button>
                  <Image
                    src={item.image}
                    alt="Image description"
                    width={800}
                    height={450}
                    layout="intrinsic" 
                    className="cover h-full w-full rounded-xl"// O'lchamlarni avtomatik sozlash
                  />

                 
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

