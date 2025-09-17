
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, Shield, Globe, Award, TrendingUp } from "lucide-react";
import { aboutTexts } from "@/data/texts";
import { localeCodes } from "@/i18n/locales";

export async function generateStaticParams() {
	return localeCodes.map((locale) => ({ locale }));
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {aboutTexts.hero.headline}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
              {aboutTexts.hero.subheadline}
            </p>
            <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
              {aboutTexts.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Evolution</h2>
          <div className="max-w-4xl mx-auto">
            {aboutTexts.timeline.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  {milestone.year}
                </div>
                <Card className="flex-1 glass border-primary/20 hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Mission, Vision & Philosophy</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth text-center">
                <CardContent className="p-8">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Mission</h3>
                  <p className="text-muted-foreground">{aboutTexts.mission.mission}</p>
                </CardContent>
              </Card>
              
              <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth text-center">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Vision</h3>
                  <p className="text-muted-foreground">{aboutTexts.mission.vision}</p>
                </CardContent>
              </Card>
              
              <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth text-center">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Principles</h3>
                  <ul className="text-muted-foreground text-left space-y-2">
                    {aboutTexts.mission.principles.slice(0, 3).map((principle, index) => (
                      <li key={index} className="text-sm">{principle}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
