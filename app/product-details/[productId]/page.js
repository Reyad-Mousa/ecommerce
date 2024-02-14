"use client";
import Breadcrumb from "../../_components/Breadcrumb";
import ProductApi from "../../_utils/ProductApi";
import ProductImage from "../_components/ProductImage";
import ProductInfo from "../_components/ProductInfo";
import { useEffect, useState } from "react";
import ProductList from "../../_components/ProductList";
import { usePathname } from "next/navigation";

const ProductDetails = ({ params }) => {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);

  const getProductById_ = () => {
    ProductApi.getProductsById(params?.productId).then((res) => {
      setProductDetails(res?.data?.data);
      getProductsByCategory_(res?.data?.data);
    });
  };
  
 useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  const getProductsByCategory_ = (product) => {
    ProductApi.getProductsByCategory(product?.attributes?.category).then(
      (res) => {
        setProductList(res?.data?.data);
      }
    );
  };

 
  return (
    <div className="px-10 py-8 md:px-28 text-white bg-gray-900">
      <Breadcrumb path={path} />
      <div className="flex justify-around mt-10 flex-col lg:flex-row gap-0 md:gap-5 ">
        <div>
          <ProductImage product={productDetails} />
        </div>
        <div>
          <ProductInfo product={productDetails} />
        </div>
      </div>
      {Array.isArray(productList) && productList.length ? (
        <div className="mt-10 ">
          <h2 className="text-xl my-4 font-bold text-gray-900">
            Similar Products
          </h2>
          <ProductList productList={productList} />
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
