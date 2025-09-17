'use client';

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <div className="relative">
      <Card className="glass border-primary/20 shadow-elegant">
        <CardContent className="p-8">
          <div className="flex mb-4">
            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-warning text-warning" />
            ))}
          </div>
          
          <blockquote className="text-lg mb-6 leading-relaxed">
            "{testimonials[currentIndex].text}"
          </blockquote>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold mr-4">
              {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold">{testimonials[currentIndex].name}</div>
              <div className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevTestimonial}
          className="rounded-full"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextTestimonial}
          className="rounded-full"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};