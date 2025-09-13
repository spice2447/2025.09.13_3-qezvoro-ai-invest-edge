'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
        <p className="text-xl mt-4">Join thousands of investors and start your AI-powered journey today.</p>
        <Button variant="secondary" size="lg" className="mt-8">
          Sign Up Now <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
