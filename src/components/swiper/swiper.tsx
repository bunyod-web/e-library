"use client";
import React, { useState, useEffect } from "react";
import { HiPlay } from "react-icons/hi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocale } from "next-intl";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "./swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchData } from "@/config/api";
import { News } from "@/interfaces/index";
import Link from "next/link";
export default function Swipe() {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [data, setData] = useState<News[]>();
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const locale = useLocale(); // Joriy tilni olish

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(locale, '/news/'); // Locale ni API ga yuborish
        setData(result);
      } catch (error) {
        console.error('Ma’lumotni yuklashda xatolik:', error);
      }
    };

    loadData();
  }, [locale]);

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
                    height="326"
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
                  <Link href={`/news/${item.id}/`}>
                  <Image
                    src={item.image}
                    alt="Image description"
                    width={800}
                    height={470}
                    layout="intrinsic" 
                    className="cover h-full w-full rounded-xl"// O'lchamlarni avtomatik sozlash
                  />
                  </Link>
                 
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

