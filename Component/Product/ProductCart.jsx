import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCart = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  const [mainImage, setMainImage] = useState(0);
  const [SkuImage, setSkuImage] = useState(0);

  const getData = () => {
    const config = {
      headers: {
        Authorization: import.meta.env.VITE_SOME_KEY,
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
  const url =
    Product?.product_gallery?.length > 0 &&
    Product?.product_gallery[mainImage]?.image.url;
  const pic =
    Product?.product_gallery?.length > 0 &&
    Product?.product_gallery[mainImage]?.image.file_name;
  const price = Product?.sku_list?.length > 0 && Product?.sku_list[0];
  const sku = Product?.sku_list?.length > 0 && Product?.sku_list[SkuImage].sku;
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="d-flex">
          <div className="col">
            <div className="row">
              <div className="col-3 overflow-auto">
                {Product?.product_gallery?.length > 0 &&
                  Product?.product_gallery.map((data, index) => (
                    <div className="card mt-2">
                      <img
                        className="card-img"
                        src={`${data.image.url}/${data.image.file_name}`}
                        alt=""
                        onClick={() => setMainImage(index)}
                      />
                    </div>
                  ))}
              </div>
              <div className="col card h-100">
                <img className="card-img" src={`${url}/${pic}`} alt="" />
              </div>
            </div>
          </div>
          <div className="col ms-5">
            <h5>{Product?.name}</h5>
            <p className="text-danger">
              <b>7 sold in last 18 hours</b>
            </p>
            <hr />
            <div className="d-flex">
              <h6 className="text-primary">
                <span className="fs-2">৳</span>
                {price.sell_price}
              </h6>
              <h6 className="mt-3 ms-3">
                <del>৳{price.regular_price}</del>
              </h6>
            </div>
            <hr />
            <div>
              <span className="border p-2 bg-warning text-dark rounded-pill">
                <b>SKU:</b>
              </span>

              <span className="border rounded border-dark ms-2 p-1">{sku}</span>
              <hr />

              {Product?.variant_gallery?.length > 0 && <span>Color</span>}
              <div className="d-flex flex-row">
                {Product?.variant_gallery?.length > 0 &&
                  Product?.variant_gallery.map((data, index) => (
                    <div className="card mt-3 ms-2">
                      <img
                        style={{ height: "60px", width: "90px" }}
                        className="img-fluid card-img-top"
                        src={`${data.image.url}/${data.image.file_name}`}
                        alt=""
                        onClick={() => setSkuImage(index)}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <hr />
            <div>
              <button type="button" className="btn btn-primary">
                <b>Buy Now</b>
              </button>
              <button type="button" className="btn btn-warning text-dark ms-2">
                <b>Add To Cart</b>
              </button>
            </div>
            <p className="text-warning mt-3">
              <b>45 customers are viewing this product</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
