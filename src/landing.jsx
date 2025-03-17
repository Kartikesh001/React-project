import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hospital Management</h1>
          <nav>
            <a href="#services" className="mx-2 hover:underline">Services</a>
            <a href="#about" className="mx-2 hover:underline">About</a>
            <a href="#contact" className="mx-2 hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Health, Our Priority
        </motion.h2>
        <p className="text-lg mb-6">Providing the best healthcare for you and your family.</p>
        <Button className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white">
          Book an Appointment
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Emergency", "Diagnostics", "Surgery"].map((service) => (
              <Card key={service}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-gray-600">
                    High-quality {service.toLowerCase()} services for all patients.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700">
            We are committed to providing the highest level of healthcare to all patients. 
            Our team of professionals works around the clock to ensure the best care.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-2 border border-gray-300 rounded mb-4" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 border border-gray-300 rounded mb-4" 
              required 
            />
            <textarea 
              placeholder="Message" 
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows="4"
              required
            />
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2025 Hospital Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
