"use client";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";
function Header() {
  const { user } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [openCart, setOpenCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    setIsLoggedIn(window?.location?.href.toString().includes("sign-in"));
  }, []);

  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };

  useEffect(() => {
    user && getCartItems();
  }, [user]);
  return (
    !isLoggedIn && (
      <header className="bg-gray-900 text-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Image src="/logo.svg" width={50} height={50} alt="logo" />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className=" transition hover:text-gray-300" href="/">
                    Home
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-300" href="#">
                    Explore
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-300" href="#">
                    Projects
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-300" href="#">
                    About Us
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-300" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            {user ? (
              <div className="  relative flex items-center gap-5">
                <div
                  onClick={() => setOpenCart(!openCart)}
                  className=" relative cursor-pointer"
                >
                  <ShoppingCart className="text-[#6fcdc2] " />
                  <h6 className="absolute top-[-12px] right-[-9px] z-10 bg-red-500 rounded-full items-center text-[14px] justify-center flex p-[11px] h-2 w-2">
                    {cart?.length}
                  </h6>
                </div>
                <UserButton afterSignOutUrl="/" />
                {openCart && <Cart />}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <a
                    className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-300 sm:block"
                    href="/sign-up"
                  >
                    Register
                  </a>
                </div>

                <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-300 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
