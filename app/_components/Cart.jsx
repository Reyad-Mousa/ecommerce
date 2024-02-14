import Link from "next/link";
import { CartContext } from "../_context/CartContext";
import { useContext } from "react";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div
      className="max-h-[25rem]  overflow-auto rounded-lg absolute right-9 top-12 w-max sm:w-screen max-w-sm border border-gray-600 bg-gray-800  px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <span className=" z-20 absolute   right-2 top-[-2.2rem]  border-[1.1rem] border-gray-300 border-t-transparent border-r-transparent border-l-transparent "></span>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart?.map((item) => (
            <Link
              href={`/product-details/${item?.id}`}
              key={item?.id}
              className="flex items-center gap-4"
            >
              <img
                src={item?.product?.attributes?.image?.data?.attributes?.url}
                alt=""
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm ">{item?.product?.attributes?.title}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-300">
                  <div>
                    <dt className="inline">Category:</dt>
                    <dd className="inline">
                      {item?.product?.attributes?.catagory}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">
                      $ {item?.product?.attributes?.price}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <form>
                  <label htmlFor="Line1Qty" className="sr-only">
                    {" "}
                    Quantity{" "}
                  </label>

                  <input
                    type="number"
                    min="1"
                    value="1"
                    id="Line1Qty"
                    className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </form>
              </div>
            </Link>
          ))}
        </ul>
        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            alt="Cart"
            className="block rounded border border-gray-600 px-5 py-3 text-sm text-white transition hover:ring-1 hover:ring-gray-400"
          >
            View My Cart ({cart?.length})
          </Link>

          <a
            href="#"
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </a>

          <a
            href="#"
            className="inline-block text-sm text-blue-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
