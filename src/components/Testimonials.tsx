'use client';
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const testimonialsData = [
  {
    name: "Alice",
    role: "Investor",
    text: "I've seen amazing returns since I started using this platform.",
    rating: 5
  },
  {
    name: "Bob",
    role: "Trader",
    text: "The AI insights are a game-changer for my strategy.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">What Our Users Say</h2>
        <div className="max-w-2xl mx-auto mt-12">
          <TestimonialCarousel testimonials={testimonialsData} />
        </div>
      </div>
    </section>
  );
}
