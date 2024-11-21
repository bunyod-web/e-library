'use client'

import { useEffect, useState } from "react";
import { fetchData } from "@/config/api";
import { News } from "@/interfaces/index";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import DetailSwipe from "@/components/swiper/detailnews";
const NewsDetail = () => {
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
    <div className="mt-28 mb-20 h-screen mx-auto max-w-6xl flex flex-col gap-5">
    
      <div>
        <iframe
          width="100%"
          height="500"
          src={newsItem.news_video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      </div>
      <DetailSwipe />
      <h1 className="font-bold text-3xl">{newsItem.title}</h1>
      <p>{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
