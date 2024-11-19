'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FAQ } from '@/interfaces/index';
import { fetchData } from '@/config/api';
import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

export default function Faq() {
  const locale = useLocale(); // Joriy tilni olish
  const [data, setData] = useState<FAQ[]>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(locale, '/faq/'); // API so'rovi
        setData(result);
      } catch (error) {
        console.error('Ma’lumotni yuklashda xatolik:', error);
      }
    };

    loadData();
  }, [locale]); // Til o'zgarganda qayta yuklanadi

  console.log(data)

  return (
    <div className="w-full pt-32 px-4 h-screen">
      {data?.map((item, index) => (
        <div className="w-full mx-auto max-w-6xl divide-y my-5 divide-white/5 rounded-xl bg-gray-800" key={index}>
          <Disclosure as="div" className="p-6 transition-all duration-700">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                {item.question}
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
              {item.answer}
            </DisclosurePanel>
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
