import React from "react";
import { useAuth } from "../../customeHook/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-full bg-slate-800 rounded-xl flex items-center justify-center">
      <div className="w-full max-w-lg flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold">
          {user ? `Welcome Back, ${user.name} 👋` : "Welcome Back 👋"}
        </h2>
      </div>
    </div>
  );
};

export default DashboardHome;
