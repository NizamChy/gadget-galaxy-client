import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { id, brand_name, brand_image } = brand || {};

  return (
    <div>
      <Link to={`/products/${brand_name}`}>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-80">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img
            className="rounded-lg w-80 h-52"
            src={brand_image}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h4 className="text-center block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {brand_name}
          </h4>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BrandCard;
