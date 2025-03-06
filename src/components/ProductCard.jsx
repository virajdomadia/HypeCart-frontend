import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Wishlist Icons

const ProductCard = ({ product, view }) => {
  const { addToCart, updateQuantity, removeItem, cartItems } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  // Get product quantity from cart
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Check if product is in wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = (event) => {
    event.preventDefault();
    addToCart(product);
  };

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="relative border rounded-lg shadow-lg overflow-hidden p-4">
      {/* Wishlist Icon */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-2 right-2 text-xl"
      >
        {isInWishlist ? (
          <FaHeart className="text-red-500 transition duration-300 ease-in-out transform scale-110" />
        ) : (
          <FaRegHeart className="text-gray-400 hover:text-red-500 transition duration-300 ease-in-out" />
        )}
      </button>

      {/* Clickable Image & Product Name */}
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-2"
        />
      </Link>

      <div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold hover:text-blue-500">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600">₹{product.price}</p>

        {/* Counter UI */}
        {quantity > 0 ? (
          <div className="flex items-center justify-center space-x-3 mt-2">
            <button
              onClick={handleDecrement}
              className="bg-red-500 text-white px-3 py-1 rounded text-lg hover:bg-red-600"
            >
              −
            </button>
            <span className="text-lg font-semibold w-6 text-center">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="bg-green-500 text-white px-3 py-1 rounded text-lg hover:bg-green-600"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
