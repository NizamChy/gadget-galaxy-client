//SignIn.jsx file


import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogle = () =>{
    // console.log('google')

    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
      console.log('error', error.message)
    })
  }

  const handleSignin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Sign-in successful");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000); // Delay navigation by 1 second (adjust the delay as needed)
      })
      .catch((error) => {
        console.error(error);
        toast.error("Sign-in failed. Please check your credentials.");
      });
  };

  return (
    <div className="min-h-[100vh]">
      <ToastContainer />
      {/* Sign in */}
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left md:w-1/2">
              <h1 className="text-2xl lg:text-5xl font-bold">
                Sign in to connect with us.
              </h1>
              <p className="py-6">
                Welcome back to Gadget Galaxy! Sign in to your Gadget Galaxy
                account and immerse yourself in the ever-expanding universe of
                technology and electronics. As a fellow tech enthusiast, you are
                just a login away from exploring the latest gadgets and
                innovations. Manage your orders, discover new arrivals, and stay
                connected with the tech community.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-xl px-5 w-full py-2.5 text-center mr-2 mb-2"
                  >
                    Sign in
                  </button>
                  <button onClick={handleGoogle} type="button" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Continue with Google</button>
                </div>
                <div>
                  <p>
                    Don&apos;t have an account?{" "}
                    <Link to="/signup">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
                      >
                        Sign up
                      </button>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End of Sign in */}
    </div>
  );
};

export default SignIn;
