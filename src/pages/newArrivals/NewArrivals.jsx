//NewArrivals.jsx

import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { useState } from "react";
import Swal from "sweetalert2";

const NewArrivals = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const [loading, setLoading] = useState(false); // Added loading state

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true); // Set loading state to true

        fetch(`https://brand-shop-server-six-vert.vercel.app/product/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your product has been deleted.',
              'success'
            );
            const remaining = products.filter(prod => prod._id !== _id);

            setProducts(remaining);
            setLoading(false); // Set loading state to false
          }
        });
      }
    });
  };

  return (
    <div className="m-4 lg:m-20 lg:mt-0">
      <h1 className="text-3xl text-center">Total products : {loadedProducts.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading ? ( // Conditionally render loading state
          <p>Deleting...</p>
        ) : (
          products.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              products={products}
              setProducts={setProducts}
              handleDelete={handleDelete} // Pass the handleDelete function to the ProductCard
            ></ProductCard>
          ))
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
