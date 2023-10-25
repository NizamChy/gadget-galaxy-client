import { useState, useEffect } from "react";
import MyCartCards from "./MyCartCards";
import Swal from "sweetalert2";

const MyCart = () => {
  const [myCartItems, setMyCartItems] = useState([]);

  useEffect(() => {
    fetch("https://brand-shop-server-six-vert.vercel.app/mycart")
      .then((response) => response.json())
      .then((data) => {
        setMyCartItems(data);
      });
  }, []);

  const handleRemove = (_id) => {
    Swal.fire({
      title: "Are you sure to remove it from My Cart?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-six-vert.vercel.app/mycart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setMyCartItems(myCartItems.filter((item) => item._id !== _id));
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Total items on cart: {myCartItems.length}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {myCartItems.map((myCartItem) => (
          <MyCartCards
            key={myCartItem._id}
            myCartItem={myCartItem}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
