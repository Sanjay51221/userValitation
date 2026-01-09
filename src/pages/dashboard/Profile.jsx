import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../customeHook/useAuth";

const Profile = () => {
  const { user, isLoggedIn } = useAuth(); // ✅ reuse context

  if (!isLoggedIn) return <Navigate to="/login" />; // ✅ simple guard
  if (!user) return null; // ⏳ wait for context fetch

  return (
    <div className="min-h-screen bg-slate-800 rounded-xl text-white flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-xl border w-[360px] flex flex-col items-center text-center">
        <div className=" w-24 h-24 border-2 rounded-full border-blue-800">
          <img
          src={user.image}
          alt=""
          className="rounded-full mx-auto mb-4"
        />
        </div>
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-sm text-slate-400">{user.email}</p>
        <p className="mt-2">Age: {user.age}</p>
        <p>Education: {user.education}</p>
      </div>
    </div>
  );
};

export default Profile;
