import { useLoaderData } from "react-router-dom";
import Banner from "../../components/header/banner/Banner";
import Footer from "../../layout/Footer";
import Brands from "../brands/Brands";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../aboutUs/AboutUs";



const Home = () => {

  const brands = useLoaderData();


  return (
    <div>
      
      <Banner></Banner>
      <Brands brands={brands}></Brands>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
