import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/product.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
   await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <h2>Loading...</h2>
        </div>
      </>
    );
  };

  const updateProduct = (cat) => {
    const updateList = products.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className=" d-flex justify-content-center pb-5 ">
          <button
            className="btn me-2 p-4 "
            id="category"
            onClick={() => updateProduct("men's clothing")}
          >
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/787364/1617369686163.jpg?imwidth=480&impolicy=hq"
              alt="men's clothing"
              height={"240 px"}
              width={"305 px"}
            />
          </button>
          <button
            className="btn me-2 p-4"
            id="category"
            onClick={() => updateProduct("women's clothing")}
          >
            <img
              src="https://i.pinimg.com/originals/c4/47/d0/c447d0bcb4273a13a1910aa0aedc7576.jpg"
              alt="women's clothing"
              height={"240 px"}
              width={"305 px"}
            />
          </button>
          <button
            className="btn me-2 p-4 "
            id="category"
            onClick={() => updateProduct("electronics")}
          >
            <img
              src="https://th.bing.com/th/id/R.6deae59e1270f6b360977aa05d56f9e8?rik=O9ArwgSJaO%2b05A&riu=http%3a%2f%2fwww.shopickr.com%2fwp-content%2fuploads%2f2015%2f10%2famazon-india-electronics-sale-2015-banner1.jpg&ehk=VACx5MRwH8sPudZb9Q5uIdL%2bMRBOxWn%2bBfVFKT5HCvw%3d&risl=&pid=ImgRaw&r=0"
              alt="electronics"
              height={"240 px"}
              width={"305 px"}
            />
          </button>
          <button
            className="btn me-2 p-4 "
            id="category"
            onClick={() => updateProduct("jewelery")}
          >
            <img
              src="https://th.bing.com/th/id/R.0c86f04b512133600b128ed19019e1a9?rik=tg7kCWWzbxcXbw&riu=http%3a%2f%2fwww.burbanktowncenter.com%2fwp-content%2fuploads%2fsites%2f130%2f2018%2f01%2fSA-FJ-for-BTC.jpg&ehk=bM0JxHMHXlDMB2WDpi8ByseUl0UwpKc7LDdaMcVg0NA%3d&risl=&pid=ImgRaw&r=0"
              alt="jewelery"
              height={"240 px"}
              width={"305 px"}
            />
          </button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 ">
                <div className="card h-100 text-center  p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250 px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text fw-bolder lead">${product.price}</p>
                    <Link
                      to={`/detail/${product.id}`}
                      className="btn btn-warning"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className=" container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center text-upercase text-secondary">
              "CHOOSE PRODUCT CATEGORY"
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}