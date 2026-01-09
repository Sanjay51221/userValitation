import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") !== "false"
  );

  // 🔐 auth check
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleDarkMode = () => {
    const value = !darkMode;
    setDarkMode(value);
    localStorage.setItem("darkMode", value);
  };

  const handleNotifications = () => {
    const value = !notifications;
    setNotifications(value);
    localStorage.setItem("notifications", value);
  };

  return (
    <div className="min-h-full bg-slate-800 rounded-xl flex items-center justify-center">
      <div className="w-full max-w-lg flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl p-6 text-white">

        
        <h2 className="text-2xl font-bold">
          Settings Page 
        </h2>

      </div>
    </div>
  );
};

export default Settings;
