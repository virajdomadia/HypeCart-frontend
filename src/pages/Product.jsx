import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products"; // Your product data

const Products = () => {
  const { brand } = useParams(); // Get brand from URL

  // Filter products by brand
  const filteredProducts = products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5 capitalize">{brand} Products</h2>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products found for {brand}.</p>
      )}
    </div>
  );
};

export default Products;
