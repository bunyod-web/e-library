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
import { Event } from "@/interfaces";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function EventsSwipe() {
  const [data, setData] = useState<Event[]>();
  const locale = useLocale(); // Joriy tilni olish
  const t = useTranslations('Event')
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(locale, '/event/'); // Locale ni API ga yuborish
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
        className="mySwiper my-[264px] text-white"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id} className="relative rounded-3xl">
            <Link href={`/events/${item.id}/`}>
            <div className="group box-border relative cursor-pointer">

                <div
                  className="rounded-full h-1/2" 
                >
                
                  <Image
                    src={item.image}
                    alt="Image description"
                    width={600}
                    height={400}
                    layout="intrinsic" 
                    className="w-4/4 rounded-3xl"// O'lchamlarni avtomatik sozlash
                  />
                  
                </div>
                <div className="absolute w-full rounded-b-3xl p-5 backdrop-blur-sm z-50 -bottom-full text-white transition-all duration-700 flex flex-col items-start group-hover:bottom-0">
                  <div className="font-bold ">{t('title')} : {item.title}</div>
                  <div className="flex gap-1"><div className="font-bold">{t('duration')} : </div>{item.duration}</div>
                  <div className="flex gap-1"><div className="font-bold">{t('event_reason')} : </div>{item.event_reason}</div>
                  <div className="flex gap-1"><div className="font-bold">{t('address')} :</div> {item.address}</div>
                  <div className="flex gap-1"><div className="font-bold">{t('speaker')} :</div> {item.speaker}</div> 
                </div>
                </div></Link>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </>
  );
}

