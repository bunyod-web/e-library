"use client";

import React, { useState, useEffect } from "react";
import { FaGasPump, FaCogs } from "react-icons/fa";
import { useLocale } from "next-intl";
import Image from "next/image";
import instance from "@/config/api";
import Link from "next/link";
import type { Books as BookType } from "@/interfaces";

const Books: React.FC = () => {
    const [books, setBooks] = useState<BookType[]>([]); // Kitoblar uchun holat
    const [error, setError] = useState<string | null>(null); // Xato holati
    const locale = useLocale(); // Joriy tilni olish

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const response = await instance.get("/information/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                        "Accept-Language": locale,
                    },
                });

                const filteredBooks = response.data.filter(
                    (book: BookType) => book.category === 4
                );
                setBooks(filteredBooks);
                setError(null); // Xatoni tozalash
            } catch (err) {
                console.error("Ma’lumotni yuklashda xatolik:", err);
                setError("Ma’lumotni yuklashda xatolik yuz berdi.");
            }
        };

        loadBooks();
    }, [locale]);

    if (error) {
        return <p className="text-red-500 text-center mt-10">{error}</p>;
    }

    if (!books.length) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="mt-24 mb-20">
            {/* Kitoblar ro'yxati */}
            {books.map((book) => (
                
                    <div
                        key={book.id}
                        className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4"
                    >
                        <Link href={`/book/${book.id}/`}>
                        <Image
                            src={book.thumbnail || "/default-thumbnail.jpg"}
                            alt={book.title || "No Image"}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 cursor-pointer">
                                {book.title}
                            </h2>
                            <p className="text-xl text-gray-700 mt-2">
                                {book.description || "No description available."}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center">
                                    <FaGasPump className="text-xl text-gray-500 mr-2" />
                                    <span className="text-gray-600">{book.category || "Unknown"}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCogs className="text-xl text-gray-500 mr-2" />
                                    <span className="text-gray-600">{book.author || "Unknown Author"}</span>
                                </div>
                            </div>
                            <a
                                href={`/books/${book.id}`}
                                className="block text-blue-500 hover:text-blue-700 mt-4"
                            >
                                See more features
                            </a>
                            <button
                                className="w-full bg-blue-600 text-white py-2 mt-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Build & Price
                            </button>
                        </div>
                        </Link>
                    </div>
               
            ))}
        </div>
    );
};

export default Books;
