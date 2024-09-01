import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import showPasswordImg from "../assets/eye.png";
import hidePasswordImg from "../assets/crosseye.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      alert("Wrong email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8  shadow-lg h-[450px] w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left mx-3"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left mx-3"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute inset-y-0 right-0 flex items-center px-2"
            >
              <img
                src={showPassword ? showPasswordImg : hidePasswordImg}
                alt={showPassword ? "Hide Password" : "Show Password"}
                className="h-5 w-5"
              />
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="mt-10 text-center">
          <span>
            {" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
