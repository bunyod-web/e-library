'use client'

import { useEffect, useState } from "react";
import { fetchData } from "@/config/api";
import { Books } from "@/interfaces";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
const TextBooksDetail = () => {
const locale = useLocale(); 
  const params = useParams()
  const [item, setItem] = useState<Books | null>(null);

  useEffect(() => {
    if (params.id) {
      const loadNews = async () => {
        try {
          const result = await fetchData(locale, `/textbook/${params.id}/`);
          setItem(result);
        } catch (error) {
          console.error("Xatolik:", error);
        }
      };

      loadNews();
    }
  }, [params.id, locale]);
  if (!item) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className="mt-28 mb-20 h-screen mx-auto max-w-6xl flex flex-col gap-5 px-10">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <p className="text-lg">{item.author}</p>
        <p className="text-lg">{item.description}</p>
        <p className="text-lg">{item.created_at}</p>
    </div>
  );
};

export default TextBooksDetail;
