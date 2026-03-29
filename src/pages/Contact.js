import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      {/* About Section */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          About Our Store
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300">
          Welcome to our online store! We offer high-quality fashion products 
          including watches, handbags, shoes, and more. Our mission is to provide 
          the best shopping experience with stylish and affordable items.
        </p>
      </div>

      {/* Contact Details */}
      <div className="flex flex-col items-center gap-6 pb-10">

        <div className="bg-gray-900 p-6 rounded w-[300px] text-center">
          <h2 className="text-xl font-bold text-yellow-500 mb-2">Email</h2>
          <p>support@buylk.com</p>
        </div>

        <div className="bg-gray-900 p-6 rounded w-[300px] text-center">
          <h2 className="text-xl font-bold text-yellow-500 mb-2">Phone</h2>
          <p>+94 77 123 4567</p>
        </div>

        <div className="bg-gray-900 p-6 rounded w-[300px] text-center">
          <h2 className="text-xl font-bold text-yellow-500 mb-2">Address</h2>
          <p>Colombo, Sri Lanka</p>
        </div>

      </div>

      {/* Extra Section */}
      <div className="text-center pb-10">
        <h2 className="text-2xl text-yellow-500 mb-2">
          We are here to help you!
        </h2>
        <p className="text-gray-400">
          Contact us anytime for support or inquiries.
        </p>
      </div>

      <Footer />
      <WhatsApp />
    </div>
  );
}