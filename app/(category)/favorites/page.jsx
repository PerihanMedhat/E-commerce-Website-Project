"use client";
import { addToCart } from "@/app/features/cart/cartSlice";
import { removeFromFavorites } from "@/app/features/favorites/favoritesSlice";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Favorites() {
  const dispatch = useDispatch();
  const router = useRouter();
  const favoritesItems = useSelector((state) => state.favorites.favorites);
  const searchQuery = useSelector((state) => state.search.query);
  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };
  const handleAddToCart = (product) => {
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

  const filteredFavorites = favoritesItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.price.toString().includes(searchQuery) 
  );

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-center mt-5 text-gray-500">
        Hurry Add products to your cart before it’s gone!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-2 md:m-8">
        {filteredFavorites.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center shadow p-2 lg:p-5"
          >
            <div className="relative w-[90%] md:w-[85%] lg:w-[65%] h-40 md:h-32 lg:h-36 my-5">
              <Link href={`/products/${item.id}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill={true}
                  quality={100}
                  className="rounded-lg  "
                />
              </Link>
            </div>

            <h3 className="text-lg font-bold my-3">{item.name}</h3>
            <p className="text-gray-500 mb-3">Price: {item.price}</p>
            <div className="flex justify-between px-4 w-full flex-wrap my-3 lg:mb-0">
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mx-2" />
                Add to Cart
              </button>
              <button
                onClick={() => handleRemoveFromFavorites(item.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer "
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
