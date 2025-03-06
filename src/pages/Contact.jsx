import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h2 className="text-3xl font-bold mb-5 text-center">Contact Us</h2>
      {successMessage && (
        <p className="bg-green-100 text-green-600 p-3 rounded mb-4 text-center">
          {successMessage}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1 h-32 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
