import React, { Fragment, useContext } from "react";
import { ShoppingCart, BadgeCheck, AlertOctagon } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../_utils/CartApis";
import { CartContext } from "../../_context/CartContext";
const ProductInfo = ({ product }) => {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      /*logic to add to cart*/
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
          product: product, // pass the entire product object
        },
      };


      CartApis.addToCart(data)
        .then((res) => {
          setCart((cart) => [
            ...cart,
            {
              id: res?.data?.data?.id,
              product: product, // pass the entire product object
            },
          ]);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  return (
    <div>
      {product?.id ? (
        <div className="mt-5 sm:mt-0 md:mt-0 gap-2 flex flex-col  ">
          <h2 className="text-[20px]  font-bold">
            {product?.attributes?.title}
          </h2>
          <h2 className="text-[15px] text-gray-400">
            {product?.attributes?.catagory}
          </h2>
          <p className="text-[14px]   break-all     ">
            {product?.attributes?.description[0].children[0].text}
          </p>
          <h2 className="text-[11px] flex flex-row items-center gap-1">
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className=" text-green-500" />
            ) : (
              <AlertOctagon className="text-red-500" />
            )}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-[20px] text-blue-600 font-bold">
            $ {product?.attributes?.price}
          </h2>
          <button
            onClick={() => handleAddToCart()}
            className="font-bold bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-[#312ecb] flex gap-2  flex-row justify-center max-w-fit "
          >
            <ShoppingCart /> Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
};

export default ProductInfo;
