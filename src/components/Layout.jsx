import React from "react";

const Layout = () => {
  return (
    <>
      <section className="h-[70%] bg-purple-600 dark:bg-slate-800 flex items-center justify-center text-white">
        <div className="text-center px-6 max-w-3xl">
          
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Build Modern Web Apps Faster
          </h1>

          <p className="mt-4 text-purple-100 text-lg">
            React + Tailwind CSS helps you build beautiful UIs quickly
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold hover:bg-purple-100 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-purple-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 dark:text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold dark:text-white  text-gray-800">
            Why Choose Us?
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow rounded-lg">
              <h3 className="font-semibold text-xl">Responsive Design</h3>
              <p className="mt-2 dark:text-white text-gray-600">
                Looks great on all devices.
              </p>
            </div>

            <div className="p-6 shadow rounded-lg"> 
              <h3 className="font-semibold text-xl">Modern Tech</h3>
              <p className="mt-2 dark:text-white text-gray-600">
                Built with React & Tailwind CSS.
              </p>
            </div>

            <div className="p-6 shadow rounded-lg">
              <h3 className="font-semibold text-xl">Clean UI</h3>
              <p className="mt-2 dark:text-white text-gray-600">
                Simple, fast and user-friendly interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
