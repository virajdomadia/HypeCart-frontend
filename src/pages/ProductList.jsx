import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = ({ products }) => {
  const [view, setView] = useState("grid");

  return (
    <div className="container mx-auto px-6 py-10">
      {/* View Toggle Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <div>
          <button
            className={`px-3 py-1 rounded-l ${
              view === "grid" ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => setView("grid")}
          >
            Grid
          </button>
          <button
            className={`px-3 py-1 rounded-r ${
              view === "list" ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => setView("list")}
          >
            List
          </button>
        </div>
      </div>

      {/* Product Display */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            : "space-y-6"
        }
      >
        {products.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} view={view} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
