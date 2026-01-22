"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../features/favorites/favoritesSlice";
import camera from "../images/camera.jpg";
import serum from "../images/serum2.jpg";
import brushes from "../images/brushes.avif";

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

function AddFavoriteButton({ id }) {
  const dispatch = useDispatch();
  const product = data.find((item) => item.id === id);
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((item) => item.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(
        addToFavorites({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        })
      );
  
      
    }
  };
  return (

    <button
      onClick={toggleFavorite}
      className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer border p-2 rounded"
    >
      <FontAwesomeIcon
        icon={isFavorite ? solidHeart : regularHeart}
        className="text-xl  text-red-600"
      
      />
    </button>
  );
}

export default AddFavoriteButton;
