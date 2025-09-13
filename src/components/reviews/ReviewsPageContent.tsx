'use client';
import { useState } from "react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, TrendingUp, Users, Shield, Globe, CheckCircle } from "lucide-react";
import { reviewsTexts } from "@/data/texts";

export function ReviewsPageContent() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {reviewsTexts.hero.headline}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              {reviewsTexts.hero.subheadline}
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {reviewsTexts.hero.indicators.map((indicator, index) => (
                <Card key={index} className="glass border-primary/20 hover:shadow-elegant transition-smooth">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{indicator.icon}</div>
                    <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {indicator.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{indicator.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {reviewsTexts.reviewCategories.map((category, index) => (
                <TabsTrigger key={index} value={category.toLowerCase().replace(/\s+/g, '-')} className="text-xs md:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>
    </>
  );
}
