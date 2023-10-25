// Route.jsx 

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AddProduct from "../pages/addProduct/AddProduct";
import MyCart from "../pages/myCart/MyCart";
import NewArrivals from "../pages/newArrivals/NewArrivals";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";
import SignUp from "../pages/signUp/SignUp";
import Users from "../components/users/Users";
import SignIn from "../signin/SignIn";
import ProductsByBrand from "../components/productsByBrand/ProductsByBrand";
import ProductDetail from "../components/productDetail/ProductDetail";
import PrivateRoute from "./PrivateRoute";

// The navbar will have website name with logo, Home, Add Product, My Cart, and Login.

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch("https://brand-shop-server-six-vert.vercel.app/mycart"),
      },

      {
        path: "/newarrivals",
        element: <NewArrivals></NewArrivals>,
        loader: () => fetch("https://brand-shop-server-six-vert.vercel.app/product"),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <PrivateRoute><Users></Users></PrivateRoute>,
        loader: () => fetch("https://brand-shop-server-six-vert.vercel.app/users"),
      },
      {
        path: "/products/:brandName",
        element: <ProductsByBrand></ProductsByBrand>,
        
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-six-vert.vercel.app/product/${params.id}`),
      },
      {
        path: "/product/:id", // Add the new route for product detail
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-six-vert.vercel.app/product/${params.id}`),
      },
    ],
  },
]);

export default myCreatedRoute;
