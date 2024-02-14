import React from "react";
import ProductListItems from "./ProductListItems";

const ProductList = ({ productList }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
      {productList.map((item) => (
          <ProductListItems item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
