import React from "react";
import DisplayProducts from "./DisplayProducts";

function Products() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-10">Products</h1>
      <DisplayProducts />
    </div>
  );
}
export default Products;