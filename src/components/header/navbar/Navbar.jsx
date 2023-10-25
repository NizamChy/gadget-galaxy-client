import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div>
      {/* <nav className="grid gap-2 md:flex justify-between py-7 mx-14 md:mx-5"> */}

      <div className="navbar bg-base-100 grid grid-cols-1 md:flex">
        <div className="flex-1">
          <NavLink to="/">
            <Logo></Logo>
          </NavLink>
        </div>

        {/* my navlinks */}
        <div className="flex-1 text-center">
          <ul className="lg:flex gap-6 lg:text-lg font-semibold grid grid-cols-3 mx-auto">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#fc3468] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#fc3468] underline"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
            <NavLink
        to="/mycart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#fc3468] underline"
            : ""
        }
      >
        <span className="flex items-center">
          My Cart
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
      </NavLink>
            </li>

            <li>
              <NavLink
                to="/newarrivals"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#fc3468] underline"
                    : ""
                }
              >
                New Arrivals
              </NavLink>
            </li>

            {/* login  */}
            <li>
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#fc3468] underline"
                    : ""
                }
              >
                SignUp
              </NavLink>
            </li>
            {user ? (
              <li onClick={handleSignOut} className="cursor-pointer">
                Sign Out
              </li>
            ) : (
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#fc3468] underline"
                      : ""
                  }
                >
                  Sign in
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* my navlinks */}

        

        <div className="flex-none grid justify-end absolute top-10 right-10 sm:static sm:justify-start sm:right-auto">
          <div className="dropdown dropdown-end sm:dropdown-start">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="https://i.ibb.co/rF8XjJW/image.png" />  */}
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="User Avatar" />
                ) : (
                  <img src="https://i.ibb.co/rF8XjJW/image.png" alt="Default Avatar" /> )
                }
                
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {/* Profile */}
                  {
                    user && <span>{user.displayName}</span>
                  }


                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              <li>
              {
                    user && <span>{user.email}</span>
                  }
              </li>
              <li>
  <div>
    {user ? (
      <p onClick={handleSignOut} className="cursor-pointer">
        Sign Out
      </p>
    ) : (
      <NavLink
        to="/signin"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#fc3468] underline"
            : ""
        }
      >
        Sign in
      </NavLink>
    )}
  </div>
</li>
            </ul>
          </div>
        </div>
      </div>
      {/* </nav> */}
    </div>
  );
};

export default Navbar;
