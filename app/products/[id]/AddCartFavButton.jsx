"use client";
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import camera from "../../images/camera.jpg";
import brushes from "../../images/brushes.avif";
import serum from "../../images/serum2.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { useRouter } from "next/navigation";

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

function AddCartFavButton({ id }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const product = data.find((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
    router.push("/cart");
  };

  return (
    <div className=" pt-4">
      <button
        onClick={handleAddToCart}
        className="w-full  p-2 text-white rounded bg-green-500 cursor-pointer hover:scale-105 transition-all duration-150"
      >
        <FontAwesomeIcon icon={faShoppingCart} className="mx-2" />
        Add to Cart
      </button>

    </div>
  );
}

export default AddCartFavButton;
