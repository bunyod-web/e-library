"use client";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocale } from "next-intl";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "./detailnews.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchData } from "@/config/api";
import { News } from "@/interfaces";
import { useParams } from "next/navigation";

export default function DetailSwipe() {
    const locale = useLocale(); 
    const params = useParams()
    const [newsItem, setNewsItem] = useState<News | null>(null);
  
    useEffect(() => {
      if (params.id) {
        const loadNews = async () => {
          try {
            const result = await fetchData(locale, `/news/${params.id}/`);
            setNewsItem(result);
          } catch (error) {
            console.error("Xatolik:", error);
          }
        };
  
        loadNews();
      }
    }, [params.id, locale]);
  
    if (!newsItem) {
      return <p>Yuklanmoqda...</p>;
    }
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper text-white rounded-xl"
      >
          <SwiperSlide key={newsItem.id} className="relative rounded-xl">
            <div className=" flex flex-col h-full">
              
                <div
                  className=" w-full h-full relative cursor-pointer items-center flex justify-center rounded-xl" 
                >
                  <Image
                    src={newsItem.image}
                    alt="Image description"
                    width={800}
                    height={500}
                    layout="intrinsic" 
                    className="cover h-full w-full rounded-xl"// O'lchamlarni avtomatik sozlash
                  />

                
                </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
}

