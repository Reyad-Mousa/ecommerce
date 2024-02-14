"use client";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApi from "../_utils/ProductApi";

const ProductSection = () => {
  const [productList, setProductList] = useState([]);

  const getLatestProducts_ = () => {
    ProductApi.getLatestProducts().then((res) => {
      setProductList(res.data.data);
    });
  };
  useEffect(() => {
    getLatestProducts_();
  }, []);
  return (
    <div className="p-10 md:px-20 bg-gray-100">
      <h2 className="text-xl my-4  font-bold text-gray-900">
        Our Latest Products
      </h2>
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
