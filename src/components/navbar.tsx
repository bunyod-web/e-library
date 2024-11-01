'use client'
import Link from 'next/link'
import React from 'react'

function Navbar() {


  return (
    <header className="mx-auto px-4 py-6 flex items-center justify-between bg-gray-800">
        <a href="/" className="font-bold text-gray-300 text-xl">Library</a>
        <nav>
          <ul className="flex items-center justify-center font-semibold">
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 text-gray-300 cursor-pointer">Markaz</button>
              <div
                className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div
                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
                  </div>
    
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a href="#"
                              className="block p-2 text-xl -mx-2 rounded-lg hover:text-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition-all ease-in-out duration-100 text-blue-600 font-semibold hover:text-indigo-600">
                              Ma'muriyat 
                            </a>
                          </li>
                          <li>
                            <a href="#"
                              className="block p-2 -mx-2 text-xl rounded-lg hover:text-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition-all ease-in-out duration-300 text-blue-600 font-semibold hover:text-indigo-600">
                              Markaz haqida
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a href="#"
                              className="block p-2 hover:text-2xl -mx-2 text-xl rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition-all ease-in-out duration-300 text-blue-600 font-semibold hover:text-indigo-600">
                              Yo'riqnoma
                            </a>
                          </li>
                          <li>
                            <a href="#"
                              className="block p-2 -mx-2 text-xl text-blue-600 hover:text-2xl rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition-all ease-in-out duration-300 font-semibold hover:text-indigo-600">
                              Tadbirlar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 text-gray-300 cursor-pointer">Elektron manbalar</button>
              <div
                className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div
                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
                  </div>
                  <div className="relative z-10">
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                          Kitob
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                          Maqola
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                          Dissertatsiya
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                          Qo'lyozma
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                          Xalqaro ilmiy manbalar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group px-3 py-2">
              <Link href={"/"} className="hover:opacity-50 text-gray-300">Aloqa</Link>
            </li>
          
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link href={"login"} className="rounded-full px-3 py-2 font-semibold bg-gray-300 flex items-center group">
                <span className="mr-2">Kirish</span>
                <svg className="stroke-current" width="10" height="10" strokeWidth="2" viewBox="0 0 10 10" aria-hidden="true">
                  <g fillRule="evenodd">
                    <path className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200" d="M0 5h7"></path>
                    <path
                      className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                      d="M1 1l4 4-4 4"></path>
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar