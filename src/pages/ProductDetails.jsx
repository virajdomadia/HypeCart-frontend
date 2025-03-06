import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsData from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const { id } = useParams(); // Get product ID from URL
  const product = productsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-500">Product Not Found!</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  p-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-lg text-gray-700">{product.description}</p>

          {/* Pricing Section */}
          <div className="text-2xl font-semibold text-green-700">
            ₹{product.price}{" "}
            <span className="text-gray-600 text-lg line-through ml-2">
              ₹{product.price + 500}
            </span>
            <span className="text-red-600 text-lg ml-2">(Special Offer!)</span>
          </div>

          {/* Stock & Delivery Info */}
          <div className="text-md text-gray-600">
            ✅ In Stock | Free Delivery{" "}
            <span className="font-semibold text-green-700">Tomorrow</span>
          </div>

          {/* Add to Cart & Buy Now Buttons */}
          <div className="space-y-2">
            <button
              onClick={handleAddToCart}
              className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
            >
              🛒 Add to Cart
            </button>
            <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700">
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
