import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  // Calculate total price (assumes price is in INR)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-700">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="border rounded px-2 py-1 mr-4"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-2xl font-semibold">
            Total: ₹{totalPrice}
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
