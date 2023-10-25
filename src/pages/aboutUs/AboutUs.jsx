

const AboutUs = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-gray-100 mb-8">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <img
              src="https://i.ibb.co/DWTYV5C/image.png"
              alt="About Us Image 1"
              className="rounded-lg shadow-lg w-full h-auto lg:h-96"
            />
          </div>
          <div className="p-4">
            <img
              src="https://i.ibb.co/tPvwpc2/image.png"
              alt="About Us Image 2"
              className="rounded-lg shadow-lg w-full h-auto lg:h-96"
            />
          </div>
        </div>

        <p className="text-gray-100 text-sm w-[80%] lg:text-lg mt-8 text-center lg:w-[60%]">
          Gadget Galaxy is your one-stop destination for the latest in technology and electronics. We offer a wide range of products from top brands such as Apple, Samsung, Sony, Google, Intel, and more. Our mission is to provide you with the best gadgets and accessories to enhance your digital lifestyle.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
