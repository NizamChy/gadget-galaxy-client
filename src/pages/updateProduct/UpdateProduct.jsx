import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

  const product = useLoaderData();
  const { _id, name, image, brand, type, price, description, rating } = product;


  const handleUpdateProduct = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const updatedProduct = {name, image, brand, type, price, description, rating}

    // console.log(newProduct);

    //send data to the server
    fetch(`https://brand-shop-server-six-vert.vercel.app/product/${_id}`, {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success!',
          text: 'Product updated successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })

  }


  return (
    <div>
      

      <div className="bg-[#F4F3F0] p-24 pb-10 pt-10 rounded">
      <div>
      <h2 className="text-2xl text-center font-bold">Update Product: {name}</h2>
      </div>

      {/* Image
        Name
        Brand Name
        Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
        Price
        Short description
        Rating
        Add button */}

      <form onSubmit={handleUpdateProduct}>
        {/* form row Image and Name*/}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Product name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="product name"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Image url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="product image url"
                name="image"
                defaultValue={image}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Brand Name and Type*/}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Brand name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="brand name"
                name="brand"
                defaultValue={brand}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="device type phone/pc/others"
                name="type"
                defaultValue={type}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Price and Short description*/}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="price"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">
                Short description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="short description"
                name="description"
                defaultValue={description}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Rating*/}
        <div>

          <div className="md:flex">
          <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <label className="">
                <select name="rating" defaultValue={rating} className="select select-bordered w-full">
                  <option value="1">1 ★</option>
                  <option value="2">2 ★</option>
                  <option value="3">3 ★</option>
                  <option value="4">4 ★</option>
                  <option value="5">5 ★</option>
                </select>
              </label>
            </div>


          {/* Rating  */}
          <div className="form-control md:w-1/2 mt-2 md:mt-12 ml-6 md:ml-10">
          <div className="rating gap-1">
            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"  />
            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
          </div>
          </div>
          </div>

          <div className="flex justify-center">
          <button type="submit" className="mt-6 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Product</button>
          </div>



        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateProduct;