import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductSearch from "../components/SearchBar";
import productsData from "../data/products"; // Sample product data

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (query) => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <ProductSearch onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
