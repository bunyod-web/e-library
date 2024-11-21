'use client'

import { useEffect, useState } from "react";
import { fetchData } from "@/config/api";
import { Event } from "@/interfaces";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

const NewsDetail = () => {
const locale = useLocale(); 
  const params = useParams()
  const [newsItem, setNewsItem] = useState<Event | null>(null);

  useEffect(() => {
    if (params.id) {
      const loadNews = async () => {
        try {
          const result = await fetchData(locale, `/events/${params.id}/`);
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
    
      Hello
    </div>
  );
};

export default NewsDetail;
