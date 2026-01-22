"use client";
import React from "react";
import camera from "../images/camera.jpg";
import serum from "../images/serum2.jpg";
import brushes from "../images/brushes.avif";
import Image from "next/image";
import AddFavoriteButton from "./AddFavoriteButton";
import { useSelector } from "react-redux";
import Link from "next/link";

function DisplayProducts() {
  const searchQuery = useSelector((state) => state.search.query);
  const data = [
    {
      id: 1,
      name: "Camera",
      price: "99",
      originalPrice: "129",
      rating: 4.5,
      reviews: 128,
      image: camera,
      description:
        "Capture life's best moments in stunning detail with this high-resolution digital camera. Perfect for beginners and hobbyists.",
      features: [
        "20MP high-resolution sensor",
        "Full HD video recording",
        "3x optical zoom",
        "Lightweight and compact design",
      ],
      inStock: true,
    },
    {
      id: 2,
      name: "Serum",
      price: "199",
      originalPrice: "249",
      rating: 4.8,
      reviews: 89,
      image: serum,
      description:
        "Revitalize your skin with this advanced anti-aging serum. Formulated to hydrate, brighten, and reduce the appearance of fine lines.",
      features: [
        "Enriched with Vitamin C",
        "Deep hydration",
        "Reduces fine lines and wrinkles",
        "Suitable for all skin types",
      ],
      inStock: true,
    },
    {
      id: 3,
      name: "Makeup Brushes",
      price: "49",
      originalPrice: "69",
      rating: 2.3,
      reviews: 45,
      image: brushes,
      description:
        "A complete set of professional makeup brushes for flawless application. Ideal for both beginners and makeup artists.",
      features: [
        "Soft synthetic bristles",
        "Ergonomic wooden handles",
        "Includes 12 essential brushes",
        "Easy to clean and maintain",
      ],
      inStock: true,
    },
  ];

  const filteredProducts = data.filter((item) => {
    if (!searchQuery) return true;

    const search = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search) ||
      item.features.some((feature) => feature.toLowerCase().includes(search))
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 my-3 gap-10 ">
      {filteredProducts.map((item) => (
        <div
          key={item.id}
          className="rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-150 "
        >
          <h2 className="text-2xl font-bold my-3">{item.name}</h2>
          <div className="relative w-[90%] md:w-[85%] lg:w-[65%] h-40 md:h-32 lg:h-36 my-5">
            <Image
              src={item.image}
              alt={item.name}
              fill={true}
              quality={100}
              className="rounded-lg  "
            />
          </div>
          <p className="text-gray-600">{item.description.slice(0, 35)}...</p>

          <div className="flex justify-between items-center ">
            <Link href={`/products/${item.id}`}>
              <button className="bg-orange-500 rounded text-base my-3 text-white p-2 cursor-pointer hover:bg-orange-600">
                View Details
              </button>
            </Link>

            <AddFavoriteButton id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayProducts;
