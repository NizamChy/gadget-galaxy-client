import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";

const ProductsByBrand = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products filtered by brandName from the backend
    fetch(`https://brand-shop-server-six-vert.vercel.app/products?brand=${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Data loading is complete
      });
  }, [brandName]);

  return (
    <div className="px-10">
      {/* <h1 className="text-2xl font-semibold mb-3 text-center">Products by {brandName}</h1> */}
      {/* slider */}
      <div className="flex justify-center">
        <div className="carousel lg:w-[80%] lg:h-[70vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/MgdQDy8/image.png" className="w-full" />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/GP92RGD/image.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/rpL8GV1/image.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/y51Q677/image.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
      <h1 className="text-2xl font-semibold mb-3 text-center my-20">
        Products by {brandName}
      </h1>

      {loading ? (
        <p className="text-3xl text-center my-32 font-bold">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-xl lg:text-3xl text-center my-32 font-bold">
          No products found for {brandName}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsByBrand;
