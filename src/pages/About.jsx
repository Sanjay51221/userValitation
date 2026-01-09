import React from "react";


const About = () => {
  return (
    <section className="min-h-screen bg-[#2b2b2b] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-4">About Us</h2>

          <p className="text-sky-400 font-medium mb-4">
            We create meaningful digital experiences
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            We are a creative team focused on building modern, scalable, and
            user-friendly digital products. Our mission is to transform ideas
            into impactful solutions through design, technology, and innovation.
            We believe in quality, collaboration, and continuous improvement.
          </p>

          <p className="text-slate-400">
            From startups to enterprises, we help businesses grow by delivering
            exceptional digital experiences that users love.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="team"
            className="rounded-2xl shadow-2xl"
          />

          <div className="absolute -right-6 bottom-10 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400 blur-sm opacity-80"></div>
            <div className="w-16 h-16 rounded-full bg-yellow-500 blur-sm opacity-70"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">20,125+</h3>
          <p className="text-slate-400 mt-2">Happy Customers</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-yellow-400">1,400+</h3>
          <p className="text-slate-400 mt-2">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-yellow-400">15,560+</h3>
          <p className="text-slate-400 mt-2">Hours of Support</p>
        </div>
      </div>
    </section>
  );
};

export default About;
