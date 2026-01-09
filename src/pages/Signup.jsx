import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const defultUser =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_guXp3VdsedwmecUjqvEmZEJ8B1Kp2RdlA&s";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    education: "",
    image: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const {
      name,
      email,
      password,
      confirmPassword,
      age,
      education,
      image,
    } = formData;

    if (!name || !email || !password || !confirmPassword || !age || !education) {
      setError("All fields except image are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const check = await fetch(
        `http://localhost:5000/users?email=${email}`
      );
      const exists = await check.json();

      if (exists.length > 0) {
        setError("Email already registered");
        return;
      }

      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          age,
          education,
          image: image || defultUser,
        }),
      });

      setSuccess("Signup successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch {
      setError("Server error");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md bg-slate-700 border border-slate-700 rounded-2xl p-8 shadow-xl text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        {error && (
          <p className="mb-4 text-sm text-red-400 text-center">{error}</p>
        )}
        {success && (
          <p className="mb-4 text-sm text-green-400 text-center">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border"
          />

          <input
            type="text"
            name="education"
            placeholder="Highest Education"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border"
          />

          <input
            type="text"
            name="image"
            placeholder="Profile Image URL"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border"
          />

          {/* password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-3 pr-16 rounded-lg bg-slate-800 border"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs cursor-pointer text-slate-400 hover:text-white"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-rose-500 hover:bg-rose-600 transition font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-rose-400 hover:underline">
            Log In
          </Link>
        </p>

      </div>
    </section>
  );
};

export default Signup;
