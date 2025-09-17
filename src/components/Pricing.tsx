'use client';
import { PricingCard } from "@/components/PricingCard";

const plans = [
  {
    name: "Basic",
    price: "$0",
    period: "/ month",
    features: ["Basic AI Models", "Limited Trades", "Email Support"],
    popular: false
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ month",
    features: ["Advanced AI Models", "Unlimited Trades", "Priority Support", "API Access"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    period: "",
    features: ["Custom AI Models", "Dedicated Infrastructure", "24/7 Support"],
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
