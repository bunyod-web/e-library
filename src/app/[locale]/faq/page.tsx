'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FAQ } from '@/interfaces/index';
import instance from '@/config/api';
import React, { useState, useEffect } from 'react';

export default function Faq() {
    const [ data, setData]  = useState<FAQ[]>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get('faq/');
            setData(response.data);
        };
    
        fetchData();
      }, []);

  return (
<div className="w-full pt-32 px-4 h-screen">
    {data?.map((item, index) => (
      <div className="w-full mx-auto max-w-6xl divide-y my-5 divide-white/5 rounded-xl bg-gray-800" key={index}>
        <Disclosure as="div" className="p-6" defaultOpen={false} key={index}>
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

  )
}
