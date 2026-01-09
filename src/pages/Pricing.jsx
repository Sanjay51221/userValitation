import React from "react";

const plans = [
  {
    name: "Basic",
    price: "₹0",
    period: "/month",
    desc: "Perfect for individuals",
    features: ["1 Project", "Basic Support", "Community Access"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    desc: "Best for professionals",
    features: ["10 Projects", "Priority Support", "Advanced Analytics"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₹999",
    period: "/month",
    desc: "For growing teams",
    features: ["Unlimited Projects", "24/7 Support", "Team Collaboration"],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Pricing Plans</h1>
        <p className="text-slate-400 mt-4">
          Choose a plan that fits your needs
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 border transition transform hover:-translate-y-2 ${
              plan.highlight
                ? "border-rose-500 bg-slate-900 shadow-xl"
                : "border-slate-700 bg-slate-800"
            }`}
          >
            {plan.highlight && (
              <span className="text-xs bg-rose-500 px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </span>
            )}

            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-slate-400 mt-2">{plan.desc}</p>

            <div className="my-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-slate-400">{plan.period}</span>
            </div>

            <ul className="space-y-3 text-sm mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-rose-400">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-medium transition ${
                plan.highlight
                  ? "bg-rose-500 hover:bg-rose-600"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
