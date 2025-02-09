"use client";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocale } from "next-intl";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "./admin_swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchData } from "@/config/api";
import { Administration } from "@/interfaces";
import { useTranslations } from "next-intl";

export default function AdminSwipe() {
  const [data, setData] = useState<Administration[]>();
  const locale = useLocale(); // Joriy tilni olish
  const t = useTranslations('Leader-Ship')
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
        className="mySwiper my-[150px] text-white"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id} className="relative rounded-3xl">
            <div className="group box-border relative cursor-pointer">
              
                <div
                  className="rounded-full h-1/2" 
                >
                  <Image
                    src={item.profile_image}
                    alt="Image description"
                    width={1000}
                    height={1000}
                    layout="intrinsic" 
                    className="w-4/4 rounded-3xl"// O'lchamlarni avtomatik sozlash
                  />
                </div>
                <div className="absolute w-full rounded-b-3xl p-5 backdrop-blur-sm z-50 -bottom-full text-white transition-all duration-700 flex flex-col items-start group-hover:bottom-0">
                  <div className="font-bold ">{t('full_name')} : {item.full_name}</div>
                  <div className="flex gap-1"><div className="font-bold">{t('position')} : </div>{item.position}</div>
                  <div className="flex gap-1"><div className="font-bold">{t('phone')} : </div>{item.phone_number}</div>
                  <div className="flex gap-1"><div className="font-bold">{t('admission_day')} :</div> {item.admission_day}</div>
                  
                </div>
                </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </>
  );
}

