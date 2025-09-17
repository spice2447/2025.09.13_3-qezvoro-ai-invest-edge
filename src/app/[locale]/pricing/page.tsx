import { PricingCard } from "@/components/PricingCard";
import { localeCodes } from "@/i18n/locales";

export async function generateStaticParams() {
	return localeCodes.map((locale) => ({ locale }));
}

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Pro",
    price: "$79",
    period: "month",
    popular: true,
    features: ["All Basic features", "Feature 4", "Feature 5", "Feature 6"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "year",
    features: ["All Pro features", "Dedicated Support", "Custom Integrations"],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our Pricing</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
}
