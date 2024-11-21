"use client";
import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { fetchData } from "@/config/api";
import { AboutUs } from "@/interfaces/index";
import { FiCheckCircle } from "react-icons/fi";
function About() {
  const locale = useLocale(); 
  const [data, setData] = useState<AboutUs[]>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(locale, '/about-us/'); // Locale ni API ga yuborish
        setData(result);
      } catch (error) {
        console.error('Ma’lumotni yuklashda xatolik:', error);
      }
    };

    loadData();
  }, [locale]);

  return (
    <div className="mt-28 mb-20 grid grid-cols-1 mx-auto max-w-7xl gap-10 md:grid md:grid-cols-2">
      {data?.map((item) => (
        <div
          key={item.id}
          className="w-full h-full bg-gray-800 rounded-2xl flex flex-col gap-2 p-10 duration-700 hover:scale-105 hover:drop-shadow-xl hover:shadow-blue-600 hover:border-blue-600"
        >
          <div className="flex gap-2 items-center text-white">
            <FiCheckCircle size={30} className="text-blue-600 font-bold" />
            <span className="font-bold text-2xl">{item.title}</span>
          </div>
          <div className="text-white">
            {item.about}
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
