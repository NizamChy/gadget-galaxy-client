import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      
      <Navbar></Navbar>
      <div className="py-2">
      <Outlet></Outlet>
      </div>

    </div>
    
  );
};

export default MainLayout;