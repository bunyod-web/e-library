"use client";
import React, { useState, useEffect } from "react";
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
import { Administration } from "@/interfaces";

export default function AdminSwipe() {
  const [data, setData] = useState<Administration[]>();
  const locale = useLocale(); // Joriy tilni olish

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(locale, '/leader-ship/'); // Locale ni API ga yuborish
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
              
                <div
                  className=" w-full h-full relative cursor-pointer items-center flex justify-center rounded-xl" 
                >
                  <Image
                    src={item.profile_image}
                    alt="Image description"
                    width={800}
                    height={450}
                    layout="intrinsic" 
                    className="cover h-full w-full rounded-xl"// O'lchamlarni avtomatik sozlash
                  />

                
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

