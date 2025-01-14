"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { fetchData } from "@/config/api";
import Link from "next/link";
import type { Books as DissertationType } from "@/interfaces";
import { FaBook } from "react-icons/fa";

const TextBooks: React.FC = () => {
  const locale = useLocale(); 
  const [dissertations, setDissertations] = useState<DissertationType[]>();
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(locale, '/textbook/'); // Locale ni API ga yuborish
        setDissertations(result);
      } catch (error) {
        console.error('Ma’lumotni yuklashda xatolik:', error);
      }
    };

    loadData();
  }, [locale]);

    return (
        <div className="mt-28 mb-20 px-5 max-w-6xl grid grid-cols-4 mx-auto gap-3">
          {dissertations?.map((item) => 
            <div key={item.id} className="w-full max-w-sm h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <div className="flex flex-col gap-4">
              <FaBook size={70} className="text-gray-900 dark:text-white mx-auto" />
              <a href="#" className="line-clamp-1 flex flex-col">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <Link href={`/textbook/${item.id}/`} className="text-blue-700 text-sm">to'liq ko'rish</Link>
              <a href="#" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Yuklash
              </a>
            </div>
          </div>
          
        )}
        </div>
    );
};

export default TextBooks;
