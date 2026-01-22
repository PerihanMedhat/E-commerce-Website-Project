"use client";
import { removeFromCart, updateQuantity } from "@/app/features/cart/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButtonCart from "./BackButtonCart";
import Link from "next/link";
import { useRouter } from "next/navigation";
function CartModal() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const total = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.price) * item.quantity;
  }, 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "black transparent",
      }}
      className="max-h-[55rem]  fixed top-0 right-0 w-full max-w-sm overflow-y-auto bg-slate-100 text-black shadow-lg p-6 rounded-l-xl z-50"
    >
      <BackButtonCart />
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="mb-4 pb-4 border-b border-gray-300 last:border-b-0 "
        >
          <div className="flex justify-around gap-3 items-center">
            <Image
              src={item.image.src}
              alt={item.name}
              width={150}
              height={80}
              quality={100}
              className="rounded-md border border-black"
            />
            <div>
              <h1>{item.name}</h1>
              <h1>{item.price}</h1>
              <div className="flex  gap-3 mt-3">
                <button
                  className="border border-black rounded px-3"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <h1>{item.quantity}</h1>
                <button
                  className="border border-black rounded px-2.5"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <div className="my-3">
                <button
                  className="text-red-600 cursor-pointer"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/*  Summary Section */}
      <div className="">
        <div className="flex justify-between mb-2 p-1">
          <span>Subtotal</span>
          <span>{total}</span>
        </div>
        <div className="flex justify-between mb-4 p-1">
          <span>Shipping</span>
          <span className="text-green-500 font-medium">Free</span>
        </div>
        <hr className="mb-4" />
        <div className="flex justify-between text-lg font-bold mb-6 p-1">
          <span>Total</span>
          <span>{total}</span>
        </div>
        <Link href={"/cart"}>
          <button className="w-full py-3 bg-black text-white rounded hover:bg-gray-900 transition cursor-pointer">
            View Cart
          </button>
        </Link>
        <button
          onClick={() => router.back()}
          className="border border-black w-full p-2 my-2 rounded text-black cursor-pointer hover:bg-slate-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartModal;
