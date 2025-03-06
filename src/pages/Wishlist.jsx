import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <h2 className="text-center text-gray-500 mt-10">
        Your Wishlist is Empty!
      </h2>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Your Wishlist ❤️</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <Link to={`/product/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-2"
              />
            </Link>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>

            {/* Remove from Wishlist */}
            <button
              onClick={() => toggleWishlist(product)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
