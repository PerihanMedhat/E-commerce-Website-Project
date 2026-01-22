import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect('/login'); 
  }
  const links = [
    { id: 1, name: "Clothes", url: "/products", icon: faCubes },
    { id: 2, name: "Skin Care", url: "/products", icon: faCubes },
    { id: 3, name: "Make-Up", url: "/products", icon: faCubes },
    { id: 4, name: "Accessories", url: "/products", icon: faCubes },
    { id: 5, name: "Foot-ware", url: "/products", icon: faCubes },
    { id: 6, name: "Decorations", url: "/products", icon: faCubes },
    { id: 7, name: "Electronics", url: "/products", icon: faCubes },
    { id: 8, name: "Furniture", url: "/products", icon: faCubes },
    { id: 9, name: "Home-Kitchen", url: "/products", icon: faCubes },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <Link href="/register?source=modal">
        <div className="fixed animate-bounce top-28 right-0 z-20 rounded-bl-lg text-xl rounded-tl-lg py-3 px-6 bg-green-500 text-white shadow-lg font-bold hover:scale-105 hover:duration-150 transition-all">
          Sign up
        </div>
      </Link>
      <div className="container mx-auto  lg:px-4 grid md:grid-cols-4 gap-4 ">
        <aside className="bg-white shadow-md rounded-xl  lg:p-6 h-[35rem] md:h-[40rem] lg:h-[45rem] md:sticky top-10 flex flex-col">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 md:mb-4 text-center p-5 lg:p-2 sticky top-0 bg-white z-10">
            Categories
          </h2>

          <ul
            className="space-y-2 md:space-y-4 overflow-y-auto flex-1 pr-2 mt-2"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "oklch(70.7% 0.165 254.624) transparent",
            }}
          >
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition"
                >
                  <FontAwesomeIcon icon={link.icon} className="text-blue-500" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <main className="md:col-span-3 ">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 rounded-xl ">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-2xl lg:text-3xl font-semibold mb-6">Welcome <span className="text-yellow-500 font-bold">{session?.user?.name}</span> to E-commerce</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Discover amazing products with great prices and exceptional
                quality
              </p>
              <Link href="/products">
                <button className="bg-slate-200 rounded-lg hover:scale-105 transition-all duration-150 text-black p-2 cursor-pointer" >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full px-2 lg:pl-0  text-gray-500">
            <h3 className="mt-8 text-2xl font-bold">Featured Products</h3>
            <h3 className="my-3 text-lg text-black font-semibold">Premium Quality - Fast Shipping - Great Support</h3>
            <p className=" my-3  text-sm md:text-base">
              At E-commerce , we're redefining the way you shop. Whether you're on the hunt for
              the latest fashion trends, cutting-edge electronics, everyday
              essentials, or unique gifts for your loved ones, we've got you
              covered. Our mission is to bring you a seamless, secure, and
              enjoyable shopping experience right at your fingertips. We
              understand that shopping online should be more than just a
              transaction — it should be an experience. That’s why we’ve built
              our platform with you in mind. From intuitive navigation and
              lightning-fast checkout to personalized recommendations and
              top-notch customer support, every detail of E-commerce is
              designed to make your shopping journey effortless and enjoyable.
              Our extensive collection features only the highest-quality
              products from trusted brands and emerging creators, all curated to
              meet your lifestyle needs. With new arrivals added regularly,
              exciting deals, and seasonal offers, there's always something
              fresh waiting for you. But we’re more than just a store — we’re a
              community. We believe in sustainability, fair trade, and
              supporting small businesses, and we strive to create a positive
              impact with every purchase. Join thousands of satisfied customers
              who trust E-commerce to deliver value, variety, and
              reliability with every order. So whether you’re upgrading your
              wardrobe, furnishing your home, or treating yourself to something
              special, you’ll find exactly what you need — and maybe even a
              little more — at E-commerce. Start exploring today, and
              discover the joy of online shopping like never before.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
