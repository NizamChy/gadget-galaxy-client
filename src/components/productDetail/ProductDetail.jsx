// ProductDetail.jsx

import Swal from "sweetalert2";

import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
  // const { name, image, description, type, price, rating } = product;
  const product = useLoaderData();
  const { _id, name, image, brand, type, price, description, rating } = product;

  

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {

    // console.log(product);

    if (addedToCart) {
      // If already added to cart, do nothing
      return;
    }

    // send data to server
    fetch("https://brand-shop-server-six-vert.vercel.app/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          setAddedToCart(true); // Mark as added to cart
          Swal.fire({
            title: "Success!",
            html: "Product added to My Cart successfully! &#128722; &#x2705;",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  // console.log(product);

  return (
    <div className="py-5">
      {/* Product Details Card  */}
      <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:flex">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">
            Brand:
            {/* <Link to={`/products/${brand_name}`}> */}
            <Link to={`/products/${brand}`}>
              <button
                type="button"
                className="ml-1 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
              >
                {brand}
              </button>
            </Link>
          </p>
          <p>{description}</p>
          <p className="font-semibold">Type: {type}</p>
          <p className="font-semibold">Price: ${price}</p>
          <p className="font-semibold">
            Rating:{" "}
            {Array.from({ length: rating }, (_, index) => (
              <span className="text-yellow-500" key={index}>
                ★
              </span>
            ))}
          </p>
          <button
            type="button"
            className="flex w-72 justify-center btn capitalize text-black text-lg font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg  px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleAddToCart}
            disabled={addedToCart} // Disable the button if added to cart
          >
           {addedToCart ? "Added to Cart" : "Add to Cart"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          {/* animation button  */}
          {/* <div>
            <style>
              {`
          button-container {
            background: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
          }

          .anim-btn, .anim-btn2 {
            width: 250px;
            height: 50px;
            font-size: 20px;
            text-align: center;
            line-height: 0px;
            color: rgba(255, 255, 255, 0.9);
            border-radius: 40px;
            background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
            background-size: 600%;
            animation: anime 16s linear infinite;
            display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px; 
          }

          .anim-btn2 {
            position: absolute;
            margin-top: -70px;
            z-index: -1;
            filter: blur(30px);
            opacity: 0.8;
          }

          @keyframes anime {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
            </style>
            <div className="button-container">
              <button className="anim-btn">
                {" "}
                Add to Cart

                <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                </span>

              </button>
            </div>
          </div> */}

          {/* animation button  */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
