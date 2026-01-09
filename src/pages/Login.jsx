import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { generateToken } from "../utils/token";
import { useAuth } from "../customeHook/useAuth"; // ✅ UPDATED
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ UPDATED

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    const res = await fetch(
      `http://localhost:5000/users?email=${email}&password=${password}`
    );
    const data = await res.json();

    if (!data.length) {
      toast.error("Invalid credentials");
      return;
    }

    const user = data[0];
    const token = generateToken(user.name, user.id);

    localStorage.setItem("authToken", token); // ✅ UPDATED
    login(); // ✅ UPDATED

    toast.success("Login successful");

    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-slate-200 bg-slate-800 px-4">
      <div className="w-full max-w-md bg-slate-700 p-8 rounded-xl text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border"
          />

          <button className="w-full py-3 rounded-lg bg-rose-500 hover:bg-rose-600">
            Log In
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-slate-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-rose-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
