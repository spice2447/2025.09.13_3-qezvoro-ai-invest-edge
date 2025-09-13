'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold">Invest with AI Precision</h1>
      <p className="text-xl text-muted-foreground mt-4">Let our algorithms work for you.</p>
      <Button size="lg" className="mt-8">
        Get Started <ArrowRight className="ml-2" />
      </Button>
    </section>
  );
}
