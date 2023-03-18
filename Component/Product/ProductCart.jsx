import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import REACT_APP_NOT_SECRET_CODE from "../../token";

const ProductCart = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);

  const getData = () => {
    const config = {
      headers: {
        Authorization: REACT_APP_NOT_SECRET_CODE,
      },
    };
    const { data } = axios
      .get("https://contents.jadroo.com/api/v1/jadroo/product-list", config)
      .then(function (response) {
        const data = response.data.results.products.data;

        const filterItem = data.find((item) => item.product_id == id);

        setProduct(filterItem);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(Product);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="d-flex">
          <div className="col-4">
            <div class="card h-100">
              <img
                class="card-img"
                src={`${Product?.featured_image?.url}/${Product?.featured_image?.file_name}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-6 ms-5">
          <h5>{Product?.name}</h5>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
