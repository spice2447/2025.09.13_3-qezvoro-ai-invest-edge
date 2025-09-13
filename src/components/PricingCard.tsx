import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
}

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <Card className={`relative transition-smooth hover:shadow-elegant ${
      plan.popular 
        ? "border-primary shadow-glow scale-105" 
        : "glass border-primary/20"
    }`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {plan.price}
          </span>
          <span className="text-muted-foreground ml-1">/{plan.period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant={plan.popular ? "hero" : "outline"} 
          className="w-full"
          size="lg"
        >
          {plan.price === "$0" ? "Start Free Trial" : "Get Started"}
        </Button>
      </CardContent>
    </Card>
  );
};