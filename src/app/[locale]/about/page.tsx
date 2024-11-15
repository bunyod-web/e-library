"use client"
import React, { useState, useEffect } from 'react'
import instance from '@/config/api'
import { AboutUs } from '@/interfaces/index'
import { FiCheckCircle } from "react-icons/fi";
function About() {
    const [ data, setData] = useState<AboutUs[]>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await instance.get("about-us/");
            setData(response.data);
            console.log(response.data);
            
        };
        fetchData();
     }, [])
       
  return (
    <div className='mt-28 mb-20 grid grid-cols-2 mx-auto max-w-7xl gap-10'>
      {data?.map((item) => (
        <div key={item.id} className='w-full h-full bg-gray-800 rounded-2xl flex flex-col gap-2 p-10 duration-700 hover:scale-105'>
          <div className='flex gap-2 items-center'>
            <FiCheckCircle size={30} className='text-blue-600 font-bold'/>
            <span className='font-bold text-2xl'>Nimadir</span>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, similique.</div>
        </div>
      ))}

    </div>

  )
}

export default About
