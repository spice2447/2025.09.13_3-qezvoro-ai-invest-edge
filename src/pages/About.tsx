import { Header } from "@/components/Header";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, Shield, Globe, Award, TrendingUp } from "lucide-react";
import { aboutTexts } from "@/data/texts";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
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

      {/* Team Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{aboutTexts.team.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {aboutTexts.team.members.map((member, index) => (
              <Card key={index} className="glass border-primary/20 hover:shadow-elegant transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-4">{member.role}</Badge>
                  <p className="text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {aboutTexts.team.stats.map((stat, index) => (
              <Card key={index} className="glass border-primary/20 text-center">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Architecture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{aboutTexts.technology.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-semibold">AI & Machine Learning</h3>
                </div>
                <ul className="space-y-3">
                  {aboutTexts.technology.ai.map((tech, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-semibold">Infrastructure</h3>
                </div>
                <ul className="space-y-3">
                  {aboutTexts.technology.infrastructure.map((infra, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {infra}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{aboutTexts.recognition.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 text-primary mr-3" />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {aboutTexts.recognition.awards.map((award, index) => (
                  <Card key={index} className="glass border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">{award}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-primary mr-3" />
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {aboutTexts.recognition.metrics.map((metric, index) => (
                  <Card key={index} className="glass border-primary/20 text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                        {metric.value}
                      </div>
                      <p className="text-muted-foreground text-sm">{metric.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">Join the Qezvoro Revolution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the future of AI-driven investing with our world-class team and cutting-edge technology.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">Start Your Journey Today</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Qezvoro Invest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}