"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { fetchData } from "@/config/api";
import Link from "next/link";
import type { Books, Books as DissertationType } from "@/interfaces";
import { FaBook } from "react-icons/fa";


const Books: React.FC = () => {
  const locale = useLocale(); 
  const [dissertations, setDissertations] = useState<DissertationType[]>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(locale, '/dissertation/'); // Locale ni API ga yuborish
        setDissertations(result);
      } catch (error) {
        console.error('Ma’lumotni yuklashda xatolik:', error);
      }
    };

    loadData();
  }, [locale]);

    return (
        <div className="mt-24 mb-20 max-w-6xl grid grid-cols-4 mx-auto gap-5">
            {/* Kitoblar ro'yxati */}
            {dissertations?.map((item) => (
                
                <div
                key={item.id}
                className="max-w-sm mx-auto flex flex-col bg-white shadow-lg rounded-lg overflow-hidden my-4 p-10 w-full gap-3"
              >
                  <div>
                    <FaBook size={50} color="black" />
                  </div>
                <Link href={`/book/${item.id}/`} className="block h-4">
                  <div>
                    <h2 className="font-semibold text-gray-800 cursor-pointer line-clamp-2">
                      {item.author}: {item.title}
                    </h2>
                  </div>
                </Link>
                <Link
                  href={`/books/${item.id}`}
                  className="block text-blue-500 hover:text-blue-700 mt-4"
                >
                  See more features
                </Link>
                <button
                  className="w-full bg-blue-600 text-white py-2 mt-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Build & Price
                </button>
              </div>
               
            ))}
        </div>
    );
};

export default Books;
