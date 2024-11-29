'use client'

import { useEffect, useState } from "react";
import { fetchData } from "@/config/api";
import { Event } from "@/interfaces";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
const NewsDetail = () => {
const locale = useLocale(); 
  const params = useParams()
  const [newsItem, setNewsItem] = useState<Event | null>(null);

  useEffect(() => {
    if (params.id) {
      const loadNews = async () => {
        try {
          const result = await fetchData(locale, `/event/${params.id}/`);
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
    <div className="mt-28 mb-20 h-screen mx-auto max-w-6xl flex flex-col gap-5">
      
        <Image
          src={newsItem.image}
          alt="Image description"
          width={1200}
          height={400}
          layout="intrinsic"
          className="rounded-3xl"
        />
        <h1 className="text-3xl font-bold">{newsItem.title}</h1>
        <p className="text-lg">{newsItem.address}</p>
        <p className="text-lg">{newsItem.duration}</p>
        <p className="text-lg">{newsItem.event_reason}</p>
        <p className="text-lg">{newsItem.speaker}</p>
    </div>
  );
};

export default NewsDetail;