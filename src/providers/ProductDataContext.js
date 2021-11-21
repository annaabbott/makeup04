/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

async function getProductsApi(productType) {
  const result = await axios.get(`/.netlify/functions/products/${productType}`);
  return result.data || [];
}

const initialState = { products: [], isLoading: false, error: null };

const ProductDataContext = createContext(initialState);

export function ProductDataProvider(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getProductsByType(productType) {
    const data = await getProductsApi(productType);
    const productList = {
      name: productType,
      items: data[productType]
    };

    setProducts((current) => [...current, productList]);
  }

  async function onLoad() {
    setIsLoading(true);

    try {
      await getProductsByType("blush");
      await getProductsByType("bronzer");
      await getProductsByType("eyeshadow");
      await getProductsByType("lipstick");
      await getProductsByType("mascara");
      await getProductsByType("nail_polish");
    } catch (error) {
      setError(error);
      console.log(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <ProductDataContext.Provider value={{ products, isLoading, error }}>
      {props.children}
    </ProductDataContext.Provider>
  );
}

export default ProductDataContext;
