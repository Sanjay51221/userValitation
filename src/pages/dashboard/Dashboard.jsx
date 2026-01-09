import React from "react";
import { CgProfile } from "react-icons/cg";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../customeHook/useAuth";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { label: "Profile", icon: <CgProfile />, path: "/dashboard/profile" },
    { label: "Update Profile", icon: <GrDocumentUpdate />, path: "/dashboard/updateProfile" },
    { label: "Settings", icon: <IoSettingsOutline />, path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    logout();
    navigate("/login");
  };

  return (
    <div className="h-screen flex bg-slate-100 overflow-hidden">
      <aside className="w-64 bg-slate-800 text-white flex flex-col">
        <div className="px-6 py-5 text-xl font-bold border-b border-slate-700">
          {user ? `${user.name} Panel` : "Dashboard"}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-6 text-sm font-bold">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="flex gap-3 px-4 py-2 rounded items-center hover:bg-slate-900"
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}

          <div className="px-4 py-4 border-slate-700">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
