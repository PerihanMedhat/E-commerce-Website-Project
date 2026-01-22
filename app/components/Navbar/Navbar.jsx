"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faShoppingCart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/app/features/search/searchSlice";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart);
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const searchQuery = useSelector((state) => state.search.query);
  const { data: session } = useSession();

  const protectedLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Products", url: "/products" },
    { id: 3, url: "/cart", icon: faShoppingCart },
    { id: 4, url: "/favorites", icon: faHeart },
  ];

  const links = [
    ...(session ? protectedLinks : []),
    {
      id: 5,
      url: "/login",
      name: session ? "Logout" : "Sign in",
    },
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };
  const handleLogout = (e) => {
    e.preventDefault();
    signOut({ redirect: false });
    router.push("/login");
    router.replace("/login");
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center w-full h-20 px-4 md:px-14 bg-gray-800 text-white">
        <div>
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
              E-commerce
            </h1>
          </Link>
        </div>
        {pathname !== "/" &&
          pathname !== "/login" &&
          pathname !== "/register" && (
            <div className="hidden lg:block">
              <input
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                placeholder="Search..."
                className="p-2 rounded-xl border border-slate-400 w-[35rem]"
              />
            </div>
          )}

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
        </button>

        <div className="hidden lg:block">
          <ul className="flex space-x-8">
            {links.map((link) => (
              <Link
                onClick={link.name === "Logout" && handleLogout}
                href={link.url}
                key={link.id}
                className={`flex items-center gap-1 hover:text-blue-400 transition-colors relative ${
                  pathname === link.url && "text-blue-400"
                }
                ${
                  link.name === "Sign in" &&
                  "border border-blue-400 rounded-lg px-4 py-1 hover:bg-slate-100 hover:text-blue-500  font-bold"
                }
                ${
                  link.name === "Logout" &&
                  "border border-blue-400 rounded-lg px-4 py-1 hover:bg-slate-100 hover:text-blue-500  font-bold"
                }
                `}
              >
                {link.name}
                {link.icon && <FontAwesomeIcon icon={link.icon} size="lg" />}
                {link.url === "/cart" && cartItemsCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 
                  flex items-center justify-center"
                  >
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute w-full bg-gray-800 text-white z-50 `}
      >
        {pathname !== "/" &&
          pathname !== "/login" &&
          pathname !== "/register" && (
            <div className="mt-8 px-3">
              <input
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                placeholder="Search..."
                className="p-2 rounded-xl border border-slate-400 w-[35rem]"
              />
            </div>
          )}
        <ul className="flex flex-col py-4">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="flex items-center justify-center gap-2 px-4 py-3 hover:bg-gray-700 transition-colors relative"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              {link.icon && <FontAwesomeIcon icon={link.icon} size="lg" />}
              {link.url === "/cart" && cartItemsCount > 0 && (
                <span className="absolute top-1 left-8 md:top-0 md:left-[26rem] bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
