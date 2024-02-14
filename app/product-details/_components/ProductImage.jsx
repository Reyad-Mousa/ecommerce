import React from "react";
import Image from "next/image";

const ProductImage = ({ product }) => {
  return (
    <div>
      {product?.attributes?.image?.data?.attributes?.url ? (
        <Image
          src={product?.attributes?.image?.data?.attributes?.url}
          width={400}
          height={400}
          alt="product details image"
          className="  rounded-lg md:max-w-fit md:w-fit  "
        />
      ) : (
        <div className="  md:w-[640px] h-[360px] bg-slate-300 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
};

export default ProductImage;
