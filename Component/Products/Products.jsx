import React from "react";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const id = data?.product_id;
  const url =
    data?.product_gallery?.length > 0 && data?.product_gallery[0]?.image.url;
  const pic =
    data?.product_gallery?.length > 0 &&
    data?.product_gallery[0]?.image.file_name;
  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-3 mt-5">
      <Link className="text-decoration-none text-dark" to={`/product/${id}`}>
        <div class="card h-100">
          <img class="card-img" src={`${url}/${pic}`} alt="" />

          <p>{data?.vendor?.vendor_name}</p>
          <hr />
          <div class="card-body">
            <h5 class="card-title">{data?.name}</h5>
            <div className="d-flex">
              <h6 class="text-warning">
                <span className="fs-2">৳</span>
                {data?.sku_list[0]?.sell_price}
              </h6>
              <h6 className="mt-3 ms-3">
                <del>৳{data?.sku_list[0]?.regular_price}</del>
              </h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Products;
