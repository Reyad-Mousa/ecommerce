"use client";
import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import { Trash2 } from "lucide-react";
import CartApis from "../_utils/CartApis";
const page = () => {
  const { cart, setCart } = useContext(CartContext);
  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice = totalPrice + Number(item?.product?.attributes?.price);
    });
    return totalPrice;
  };

  const deleteProduct = (id) => {
    CartApis.deleteCartItem(id)
      .then((res) => {
        if (res)
          setCart((oldCart) =>
            oldCart.filter((item) => item.id !== res?.data?.data?.id)
          );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart?.map((item) => (
                <li key={item?.id} className="flex items-center gap-4">
                  <img
                    src={
                      item?.product?.attributes?.image?.data?.attributes?.url
                    }
                    alt=""
                    className="size-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">
                      {item?.product?.attributes?.title}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Category: </dt>
                        <dd className="inline">
                          {item?.product?.attributes?.catagory}
                        </dd>
                      </div>

                      <div>
                        <dt className="inline">Price: </dt>
                        <dd className="inline">
                          $ {item?.product?.attributes?.price}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor="Line1Qty" className="sr-only">
                        Quantity
                      </label>

                      <input
                        type="number"
                        min="1"
                        value="1"
                        id="Line1Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>

                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="text-gray-600 transition hover:text-red-600"
                    >
                      <span className="sr-only">Remove item</span>
                      <Trash2 />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>{getTotalPrice()}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
