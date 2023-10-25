const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[73vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/f9KyxGj/banner-brand-shop.jpg)",
        }}
      >
        <div
          className="hero-overlay bg-opacity-40"
          style={{ filter: "brightness(2.5)" }}
        ></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-teal-900 bg-gray-300 rounded-lg px-4 py-2 pb-3">
              Welcome to the Gadget Galaxy!
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-900 font-mono bg-gray-300 rounded-lg px-4 py-2 pb-3">
              Bringing Innovation to Your Doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
