"use client";
import React, { useEffect, useRef, useState } from "react";
import { Cover } from "@/components/ui/cover";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Swipe from "@/components/swiper/swiper";
import { CountUp } from "use-count-up";
import { useTranslations } from "next-intl";

export default function Home() {
  const countUpRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const t = useTranslations('Home');
  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
  
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="w-full mt-20 mb-20">
      <div className="h-[40rem] w-full bg-gray-800 flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          {t('logo')}
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient */}
          <div className="absolute inset-0 w-full h-full bg-gray-800 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="flex w-full p-10 items-center justify-center bg-gray-800 dark:bg-white text-gray-600">
        <input
          type="text"
          className="w-10/12 absolute transition-all duration-700 p-4 rounded-xl outline-none bg-gray-400 font-bold text-black border-none focus:p-5 focus:absolute focus:w-11/12 focus:text-2xl placeholder:text-gray-600"
          placeholder={t('search')}
        />
      </div>
      <div className="w-full h-[350px] mx-10">
        <Swipe />
      </div>
      <h1 className="max-w-max mx-auto px-6 font-bold text-4xl border-gray-800 transition-all duration-700 cursor-pointer hover:text-white mt-14">
        <Cover>{t('category')}</Cover>
      </h1>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      {/* CountUp komponenti */}
      <div className="flex mx-auto justify-around">
      <div ref={countUpRef} className="text-center mt-10 flex-col gap-5 text-2xl font-bold rounded-xl text-white bg-gray-800 w-72 h-52 flex justify-center items-center ">
        {startCount && <CountUp isCounting end={1320} duration={4} />} +
        <span>Foydalanuvchilar soni</span>
      </div>
      <div ref={countUpRef} className="text-center mt-10 flex-col gap-5 text-2xl font-bold rounded-xl text-white bg-gray-800 w-72 h-52 flex justify-center items-center">
        {startCount && <CountUp isCounting start={100} end={1320} duration={4} />} +
        <span>Elektron kitoblar</span>
      </div>
      <div ref={countUpRef} className="text-center flex-col mt-10 gap-5 text-2xl font-bold rounded-xl text-white bg-gray-800 w-72 h-52 flex justify-center items-center">
        {startCount && <CountUp isCounting end={1320} duration={4} />} +
        <span>Maqolalar</span>
      </div>
      <div ref={countUpRef} className="text-center mt-10 flex-col gap-5 text-2xl font-bold rounded-xl text-white bg-gray-800 w-72 h-52 flex justify-center items-center">
        {startCount && <CountUp isCounting end={1320} duration={4} />} +
        <span>Qo'lyozmalar</span>
      </div>
      
      </div>
    </div>
  );
}
