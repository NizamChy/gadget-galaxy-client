

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <div className="max-w-md mx-auto">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default ContactUs;