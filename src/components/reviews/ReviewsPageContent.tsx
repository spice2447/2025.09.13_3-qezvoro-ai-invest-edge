'use client'
import { useState } from "react";
import { Header } from "@/components/Header";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, TrendingUp, Users, Shield, Globe, CheckCircle } from "lucide-react";
import { reviewsTexts } from "@/data/texts";

const partnerLogos = [
  { name: "Binance", description: "Leading cryptocurrency exchange with 500+ instruments" },
  { name: "Coinbase", description: "US regulated platform with $255M insurance coverage" },
  { name: "Interactive Brokers", description: "135+ markets with institutional-grade execution" },
  { name: "Google Cloud AI", description: "Advanced AI infrastructure and BERT models" },
  { name: "NVIDIA", description: "Accelerated computing with H100 and A100 GPUs" },
  { name: "Bloomberg", description: "Real-time market data and terminal integration" }
];

type ReviewsPageContentProps = { t: any; locale: string };


// export default function Home({ t, locale } : HomeProps) {
export default function ReviewsPageContent({ t, locale } : ReviewsPageContentProps) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
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
                    <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
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
            
            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[...reviewsTexts.reviews.beginners, ...reviewsTexts.reviews.professionals].map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="beginner-investors" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {reviewsTexts.reviews.beginners.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professional-traders" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {reviewsTexts.reviews.professionals.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Testimonials */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Video Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "My first $10,000 with Qezvoro", author: "Sergey Nikolaev", duration: "3 min" },
              { title: "Family Office chooses AI solutions", author: "Kristina Andreeva", duration: "5 min" },
              { title: "From a Scholarship to Stanford", author: "Anastasia Komarova", duration: "2 min" }
            ].map((video, index) => (
              <Card key={index} className="glass border-primary/20 hover:shadow-elegant transition-smooth group cursor-pointer">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-r from-primary to-primary/80/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-r from-primary to-primary/80/20 transition-smooth">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{video.author}</p>
                  <Badge variant="outline">{video.duration}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partner Ecosystem */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Partner Ecosystem</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Exchange Integrations</h3>
              <p className="text-muted-foreground">Connected to 15+ major exchanges worldwide</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Technology Alliances</h3>
              <p className="text-muted-foreground">Partnerships with leading tech companies</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Banking & Custody</h3>
              <p className="text-muted-foreground">Institutional-grade financial partners</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((partner, index) => (
              <Card key={index} className="glass border-primary/20 hover:shadow-elegant transition-smooth group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r from-primary to-primary/80/20 transition-smooth">
                    <span className="font-bold text-primary text-xs">{partner.name.slice(0, 2)}</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{partner.name}</h4>
                  <p className="text-xs text-muted-foreground leading-tight">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Trust & Transparency</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass border-success/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-success">✅ Fully Legitimate</h3>
                    <ul className="space-y-3">
                      {[
                        "Licensed in 12 jurisdictions",
                        "PwC audits & independent verification",
                        "Public performance reports",
                        "Lloyd's deposit insurance",
                        "Transparent management team",
                        "4+ years stable track record",
                        "50,000+ satisfied investors"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-16 h-16 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-4">Verified & Trusted</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Qezvoro Invest is a fully regulated and transparent investment platform with a proven track record of success.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">Join the Community of Successful Investors</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">98%</div>
              <p className="text-sm opacity-90">renew subscription</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">89%</div>
              <p className="text-sm opacity-90">new via recommendations</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">4.9/5.0</div>
              <p className="text-sm opacity-90">average rating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">$2.3B+</div>
              <p className="text-sm opacity-90">assets trusted</p>
            </div>
          </div>
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">Start Investing with Market Leaders</a>
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

function ReviewCard({ review }: { review: any }) {
  return (
    <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-semibold mr-4">
            {review.avatar}
          </div>
          <div>
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-muted-foreground text-sm">{review.role}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-warning text-warning" />
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
      </CardContent>
    </Card>
  );
}