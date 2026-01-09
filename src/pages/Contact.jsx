import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-slate-400 mt-4">
            We'd love to hear from you. Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Our Office</h3>
              <p className="text-slate-400">
                Bhubaneswar, Odisha, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-slate-400">
                support@example.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-slate-400">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">⏰ Working Hours</h3>
              <p className="text-slate-400">
                Monday - Friday : 9 AM - 6 PM
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-rose-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-rose-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-rose-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-rose-500 hover:bg-rose-600 transition font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
