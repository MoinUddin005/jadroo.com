import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Products/Products";

const Home = () => {
  const [Products, setProducts] = useState([]);
  const [Api, setApi] = useState([]);
  const [ApiData, setApiData] = useState(1);

  const getData = (value) => {
    const config = {
      headers: {
        Authorization: import.meta.env.VITE_SOME_KEY,
      },
    };
    const { data } = axios
      .get(
        `https://contents.jadroo.com/api/v1/jadroo/product-list?page=${value}`,
        config
      )
      .then(function (response) {
        setProducts(response.data.results.products.data);
        setApi(response.data.results.products.links);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const MoreApiData = (e) => {
    if( ApiData <= Api.length && Api.length > ApiData){
        const data = ApiData + 1;
    setApiData(data);
      getData(data);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row ">
          {Products.map((product) => (
            <Product key={product.product_id} data={product}></Product>
          ))}
        </div>
        <div className="text-center  mt-4 mb-5">
          <button
            onClick={(e) => MoreApiData()}
            type="button"
            class="btn btn-outline-secondary"
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
