import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCartCards = ({ myCartItem, handleRemove }) => {
  const { _id, name, image, brand, type, price, description, rating } = myCartItem;

    



  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        {/* <div className="card-body"> */}
        <div className="h-fit lg:h-80 py-16 px-2">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-info grid grid-cols-2 font-semibold">
            <p>
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
            {/* <p>Brand: {brand}</p> */}
            <p>Type: {type}</p>
            <p>Price: ${price}</p>
            <p>
              Rating:{" "}
              {Array.from({ length: rating }, (_, index) => (
                <span className="text-yellow-500" key={index}>
                  ★
                </span>
              ))}
            </p>
          </div>

          <div className="card-actions justify-end my-3">
            <Link to={`/product/${_id}`}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Details
              </button>
            </Link>

            <Link to={`/updateproduct/${_id}`}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Update
              </button>
            </Link>

            <button
              onClick={() => handleRemove(_id)}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartCards;
