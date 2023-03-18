import React from "react";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const id = data?.product_id
  console.log(data);
  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-3 mt-5">
      <div class="card h-100" >
        <img
          class="card-img"
          src={`${data?.featured_image?.url}/${data?.featured_image?.file_name}`}
          alt=""
        />
       
        <p>{data?.vendor?.vendor_name}</p>
        <hr />
        <div class="card-body">
          <h5 class="card-title">{data?.name}</h5>
          <div className="d-flex">
              <h6 class="text-warning"><span className="fs-2">৳</span>{data?.sku_list[0]?.sell_price}</h6>
              <h6 className="mt-3 ms-3"><del>৳{data?.sku_list[0]?.regular_price}</del></h6>
        </div>
        <Link to={`/product/${id}`}>
                  <button type="button" className=" w-50 btn btn-outline-primary">Detils</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
