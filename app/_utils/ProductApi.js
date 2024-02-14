const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = () => axiosClient.get("/products?populate=*");
const getProductsById = (id) => axiosClient.get(`/products/${id}?populate=*`);
const getProductsByCategory = (catagory) =>
  axiosClient.get(`/products?filters[catagory][$eq]=${catagory}&populate=*  `);
export default {
  getLatestProducts,
  getProductsById,
  getProductsByCategory,
};
