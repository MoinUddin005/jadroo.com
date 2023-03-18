import axios from "axios";
import React, { useEffect, useState } from "react";
import REACT_APP_NOT_SECRET_CODE from "../../token";
import Product from "../Products/Products";

const Home = () => {
  const [Products, setProducts] = useState([]);

  const getData = () => {
    const config = {
      headers: {
        Authorization: REACT_APP_NOT_SECRET_CODE,
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
  console.log("--", Products);
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
