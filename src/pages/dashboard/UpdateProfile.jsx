import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    education: "",
    image: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
      return;
    }

    const id = token.split(".")[2];
    if (!id) {
      navigate("/login");
      return;
    }

    setUserId(id);

    // fetch user data
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setFormData({
          name: data.name || "",
          age: data.age || "",
          education: data.education || "",
          image: data.image || "",
        });
        setLoading(false);
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await fetch(`http://localhost:5000/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccess("Profile updated successfully");

      setTimeout(() => {
        navigate("/dashboard/profile");
      }, 1000);
    } catch {
      setError("Failed to update profile");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
      });

      localStorage.removeItem("authToken");
      window.dispatchEvent(new Event("authChange"));
      navigate("/signup");
    } catch {
      setError("Failed to delete account");
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center text-slate-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-800 rounded-xl flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl p-6 text-white">

        <h2 className="text-2xl font-bold text-center mb-6">
          Update Profile
        </h2>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-400 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700"
          />

          <input
            type="text"
            name="education"
            placeholder="Highest Education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700"
          />

          <input
            type="text"
            name="image"
            placeholder="Profile Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700"
          />

          <button
            type="submit"
            className="w-full py-2 rounded bg-rose-500 hover:bg-rose-600 transition"
          >
            Update Profile
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="w-full py-2 rounded bg-red-600 hover:bg-red-700 transition"
          >
            Delete Account
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;













// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from "../../customeHook/useAuth";
// // import { useAuth } from "../../customhooks/useAuth";

// const UpdateProfile = () => {
//   const [formdata, setFormData] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     conformpassword: "",
//   });

//   const { activeUser } = useAuth();
//   const navigate = useNavigate();

//   // ✅ AUTO-FILL (FIXED)
//   useEffect(() => {
//     if (!activeUser) return;

//     setFormData({
//       fullname: activeUser.fullname || "",
//       email: activeUser.email || "",
//       password: activeUser.password || "",
//       conformpassword: activeUser.password || "",
//     });
//   }, [activeUser]);

//   const { fullname, email, password, conformpassword } = formdata;

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formdata, [name]: value });
//   };

//   // ✅ UPDATE PROFILE
//   const handelForm = async (e) => {
//     e.preventDefault();

//     if (password !== conformpassword) {
//       toast.error("Password is not matching", { position: "top-center" });
//       return;
//     }

//     try {
//       await axios.put(
//         `http://localhost:3000/users/${activeUser.id}`,
//         { fullname, email, password }
//       );

//       toast.success("Updation success", { position: "top-right" });
//       navigate(`/dashboard/profile/${activeUser.id}`);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   // ✅ DELETE PROFILE (ADDED)
//   const handleDelete = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete your account?"
//     );
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(
//         `http://localhost:3000/users/${activeUser.id}`
//       );

//       localStorage.removeItem("authToken");
//       toast.success("Account deleted");
//       navigate("/signup");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className="w-full h-[89vh] flex items-center justify-center">
//       <div className="w-[400px]">
//         {/* Header */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-800">
//             Update Account
//           </h2>
//         </div>

//         {/* Form */}
//         <form className="space-y-5" onSubmit={handelForm}>
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullname"
//               value={fullname}
//               onChange={handleInput}
//               placeholder="Enter your full name"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleInput}
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={handleInput}
//               placeholder="Create a password"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               name="conformpassword"
//               value={conformpassword}
//               onChange={handleInput}
//               placeholder="Confirm your password"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Update Button */}
//           <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
//             Update
//           </button>

//           {/* ✅ DELETE BUTTON (ADDED) */}
//           <button
//             type="button"
//             onClick={handleDelete}
//             className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
//           >
//             Delete Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;

