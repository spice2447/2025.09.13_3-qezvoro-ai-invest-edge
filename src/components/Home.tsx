'use client';
// import { Hero } from "./Hero";
// import { Features } from "./Features";
// import { Testimonials } from "./Testimonials";
// import { Pricing } from "./Pricing";
// import { FAQ } from "./FAQ";
// import { CTA } from "./CTA";
// import { Footer } from "./Footer";
// import GettingStarted from "./GettingStarted";
// import { AnimatedCounter } from "./AnimatedCounter";

// type HomeProps = { t: any; locale: string };


// export default function Home({ t, locale } : HomeProps) {

//   return (
//     <>
//       <Hero />
//       <Features />
//       <Testimonials />
//       {/* <Pricing /> */}
//       <FAQ />
//       <GettingStarted t={t} locale={locale} />
//       <CTA />
//     </>
//   );
// }


import { useState } from "react";
import { Header } from "@/components/Header";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Brain, Shield, TrendingUp, Zap, CheckCircle, Star } from "lucide-react";
import { homeTexts } from "@/data/texts";
import Link from "next/link";
type HomeProps = { t: any; locale: string };


export default function Home({ t, locale } : HomeProps) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    experience: "",
    agreed: false
  });

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className=" bg-gradient-to-r from-secondary to-secondary/60 bg-clip-text text-transparent">
                {homeTexts.hero.headline}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
              {homeTexts.hero.subheadline}
            </p>
            <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
              {homeTexts.hero.description}
            </p>
            
            <Button variant="hero" size="lg" className="mb-6" asChild>
              <Link href="/contact">
                {homeTexts.hero.cta}
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              {homeTexts.hero.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Registration Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass border-primary/20 shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-4">{homeTexts.quickForm.headline}</CardTitle>
                <p className="text-muted-foreground">{homeTexts.quickForm.description}</p>
              </CardHeader>
              <CardContent className="p-8">
                <form className="flex flex-col gap-2 max-w-xl mx-auto pb-10">
                  <div className="space-y-2">
                    <Label htmlFor="name">{homeTexts.quickForm.fields.name}</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{homeTexts.quickForm.fields.email}</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>
                  
                  <div className="space-y-2l">
                    <Label htmlFor="phone">{homeTexts.quickForm.fields.phone}</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>
                  
                  {/* <div className="space-y-2">
                    <Label>{homeTexts.quickForm.fields.experience}</Label>
                    <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                      <SelectTrigger className="transition-smooth focus:shadow-glow">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {homeTexts.quickForm.fields.experienceOptions.map((option, index) => (
                          <SelectItem key={index} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div> */}
                  
                  <div className="md:col-span-2">
                    <Button variant="hero" size="lg" className="w-full">
                      {homeTexts.quickForm.button}
                      <ArrowRight className="ml-2" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {homeTexts.indicators.map((indicator, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <AnimatedCounter 
                  end={parseInt(indicator.value.replace(/[^\d]/g, '') || '0')} 
                  suffix={indicator.value.replace(/[\d]/g, '')}
                />
                <p className="text-muted-foreground mt-2">{indicator.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functional Capabilities */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Functional Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeTexts.capabilities.map((capability, index) => (
              <Card key={index} className="glass border-primary/20 hover:shadow-elegant transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                    {index === 0 && <TrendingUp className="w-8 h-8 text-white" />}
                    {index === 1 && <Brain className="w-8 h-8 text-white" />}
                    {index === 2 && <Zap className="w-8 h-8 text-white" />}
                    {index === 3 && <Shield className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{homeTexts.aiTech.title}</h2>
          <h3 className="text-3xl font-semibold text-center text-zinc-500 mb-12">{homeTexts.aiTech.subtitle}</h3>
          <p className="text-center max-w-xl mx-auto mb-12">{homeTexts.aiTech.description}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {homeTexts.aiTech.items.map((tech, index) => (
              <Card key={index} className="glass border-primary/20 hover:shadow-elegant transition-smooth animate-float" style={{ animationDelay: `${index * 2}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={homeTexts.testimonials} />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homeTexts.pricing.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {homeTexts.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Getting Started — 3 Easy Steps</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {homeTexts.gettingStarted.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">{homeTexts.finalCta.headline}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Benefits:</h3>
              <ul className="space-y-2">
                {homeTexts.finalCta.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-center md:justify-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Guarantees:</h3>
              <ul className="space-y-2">
                {homeTexts.finalCta.guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-center justify-center md:justify-start">
                    <Shield className="w-5 h-5 mr-3 flex-shrink-0" />
                    {guarantee}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Button variant="secondary" size="lg" className="mb-6" asChild>
            <Link href="/contact">
              {homeTexts.finalCta.button}
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
          
          <p className="text-lg italic opacity-90">"{homeTexts.finalCta.quote}"</p>
        </div>
      </section>

    </div>
  );
}