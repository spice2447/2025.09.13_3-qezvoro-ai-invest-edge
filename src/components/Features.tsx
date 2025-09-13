'use client';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit />,
    title: "AI Analysis",
    description: "Our AI analyzes millions of data points to find the best opportunities."
  },
  {
    icon: <Zap />,
    title: "Fast Execution",
    description: "Trades are executed in milliseconds to maximize your gains."
  },
  {
    icon: <ShieldCheck />,
    title: "Secure & Reliable",
    description: "Your funds are safe with our industry-leading security."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardDescription className="p-6 pt-0">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
