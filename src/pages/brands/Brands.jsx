import BrandCard from "./BrandCard";


const Brands = ({brands}) => {

  // console.log(brands);
  return (
    <div className="py-32">
      <h1 className="text-3xl text-center mb-8 font-semibold">Our Popular Brands</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {
    brands?.map(brand => (
      <div key={brand.id} className="flex items-center justify-center">
        <BrandCard brand={brand}></BrandCard>
      </div>
    ))
  }
</div>

    </div>
  );
};

export default Brands; 