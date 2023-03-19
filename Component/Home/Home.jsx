import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Products/Products";

const Home = () => {
  const [Products, setProducts] = useState([]);

  const getData = () => {
    const config = {
      headers: {
        Authorization: import.meta.env.VITE_SOME_KEY,
      },
    };
    const { data } = axios
      .get("https://contents.jadroo.com/api/v1/jadroo/product-list", config)
      .then(function (response) {
        setProducts(response.data.results.products.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row ">
          {Products.map((product) => (
            <Product key={product.product_id} data={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
