import { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";

export default function AuthPage() {
  return (
    <Router>
      <AuthForm />
    </Router>
  );
}

function AuthForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", username: "", password: "" });
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios.post("/api/register", formData);
      toast.success("Registration successful! Redirecting...");
      setTimeout(() => navigate("/"), 500);
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Registration failed. Try again.";
      toast.error(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700">
      <Toaster />
      <div className="w-[80vw] h-[90vh] flex shadow-lg rounded-2xl overflow-hidden bg-white">
        {/* Left Side - Image */}
        <div
          className="w-1/2 bg-cover bg-center flex flex-col justify-center items-center p-6"
          style={{ backgroundImage: "url('/Doctor.png')" }}
        ></div>

        {/* Right Side - Form */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-gray-500">
          <h1 className="text-3xl font-bold text-center text-black drop-shadow-lg">Welcome to MedicoHub</h1>
          <p className="text-center text-black text-lg mt-2 drop-shadow-md">Your trust is our pride</p>
          
          <div className="w-full max-w-md p-6 shadow-2xl bg-white mt-8 rounded-lg">
            <h2 className="text-center text-2xl font-semibold text-gray-800">Register</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
              <div>
                <label htmlFor="username" className="block font-semibold">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <button type="submit" disabled={isPending} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
                {isPending ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
          
          {/* Link to Login */}
          <div className="mt-4 text-center">
            <p className="text-sm font-bold text-black">
              Already have an account? {" "}
              <a href="/sign-in" className="text-blue-600 hover:underline">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
