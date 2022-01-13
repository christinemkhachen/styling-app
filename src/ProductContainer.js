import React, { useState, useEffect } from "react";
import Search from "./Search";
import ProductsList from "./ProductsList";

function ProductContainer() {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/makeup")
      .then((response) => response.json())
      .then((result) => setMakeup(result));
  }, []);
  return (
    <div>
      <Search />
      <ProductsList makeup={makeup} />
 
    </div>
  );
}

export default ProductContainer;
