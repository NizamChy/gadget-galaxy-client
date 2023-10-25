
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
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

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const minLength = 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/.test(
      password
    );

    if (password.length < minLength) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!hasCapitalLetter) {
      toast.error("Password must contain at least one capital letter.");
      return;
    }
    if (!hasSpecialCharacter) {
      toast.error("Password must contain at least one special character.");
      return;
    }

    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Sign-up successful");
        navigate(location?.state ? location.state : "/");
        // new user has been created
        const createdAt = result.user.metadata?.creationTime;

        const user = { email, createdAt };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("user added to the database");
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-[100vh]">
      <ToastContainer />
      {/* Sign up */}
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left md:w-1/2">
              <h1 className="text-2xl lg:text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6">
                Join the Gadget Galaxy community! Get ready to embark on a
                journey through the latest in tech and electronics. Sign up to
                unlock exclusive offers, personalized recommendations, and the
                latest updates on your favorite brands. Create an account now
                and be a part of the future of innovation.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignUp} className="card-body">
                {/* user name  */}
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div> */}
                {/* user name  */}
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
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label> */}
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 w-full py-2.5 text-center mr-2 mb-2"
                  >
                    Sign Up
                  </button>

                  <button onClick={handleGoogle} type="button" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Continue with Google</button>


                </div>


                <div>
                  <p>
                    Already have an account?{" "}
                    <Link to="/signin">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
                      >
                        Sign In
                      </button>{" "}
                    </Link>
                  </p>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
      {/* End of Sign up */}
    </div>
  );
};

export default SignUp;
