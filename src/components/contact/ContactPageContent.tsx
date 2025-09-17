'use client'
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Twitter, 
  Send,
  Shield,
  CheckCircle 
} from "lucide-react";
import { contactTexts } from "@/data/texts";
import { getMessages } from "@/i18n";

export default function Contact({ locale }: { locale: string }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    amount: "",
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-success opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {contactTexts.hero.headline}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              {contactTexts.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass border-primary/20 shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-4">{contactTexts.form.title}</CardTitle>
                <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {contactTexts.form.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center text-sm text-success">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{contactTexts.form.fields.name}</Label>
                      <Input 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="transition-smooth focus:shadow-glow"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">{contactTexts.form.fields.email}</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="transition-smooth focus:shadow-glow"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">{contactTexts.form.fields.phone}</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="transition-smooth focus:shadow-glow"
                      />
                    </div>
                    
                    {/* <div className="space-y-2">
                      <Label>{contactTexts.form.fields.experience}</Label>
                      <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                        <SelectTrigger className="transition-smooth focus:shadow-glow">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactTexts.form.experienceOptions.map((option, index) => (
                            <SelectItem key={index} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div> */}
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label>{contactTexts.form.fields.amount}</Label>
                      <Select value={formData.amount} onValueChange={(value) => setFormData(prev => ({ ...prev, amount: value }))}>
                        <SelectTrigger className="transition-smooth focus:shadow-glow">
                          <SelectValue placeholder="Select planned amount" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactTexts.form.amountOptions.map((option, index) => (
                            <SelectItem key={index} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="agreement" 
                      checked={formData.agreed}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreed: !!checked }))}
                    />
                    <Label htmlFor="agreement" className="text-sm">
                      {contactTexts.form.agreement}
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={!formData.agreed}
                  >
                    {contactTexts.form.button}
                    <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{contactTexts.contacts.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Email Contacts */}
            <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Email Support</h3>
                </div>
                <div className="space-y-3">
                  {contactTexts.contacts.emails.map((contact, index) => (
                    <div key={index}>
                      <p className="font-medium">{contact.type}</p>
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-primary hover:underline transition-smooth"
                      >
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Messengers */}
            <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Instant Messaging</h3>
                </div>
                <div className="space-y-3">
                  {contactTexts.contacts.messengers.map((messenger, index) => (
                    <div key={index}>
                      <p className="font-medium">{messenger.type}</p>
                      <a 
                        href="#" 
                        className="text-primary hover:underline transition-smooth"
                      >
                        {/* {messenger.handle || messenger.number} */}
                        {messenger.number}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass border-primary/20 hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Twitter className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Social Media</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Telegram Channel</p>
                    <a href="#" className="text-primary hover:underline transition-smooth">
                      @QezvoroInvest
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Twitter</p>
                    <a href="#" className="text-primary hover:underline transition-smooth">
                      @QezvoroAI
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="#" className="text-primary hover:underline transition-smooth">
                      Qezvoro Invest
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Offices</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactTexts.offices.map((office, index) => (
              <Card key={index} className="glass border-primary/20 hover:shadow-elegant transition-smooth">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold">{office.city}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{office.address}</p>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How long does it take to register?",
                  answer: "Registration takes 2-3 minutes and you get instant access to a demo account."
                },
                {
                  question: "What is the minimum deposit?",
                  answer: "The minimum deposit is $100, but you can start with a free demo account with $100,000 virtual funds."
                },
                {
                  question: "How quickly does support respond?",
                  answer: "Our support team responds in less than 2 minutes on average, 24/7."
                }
              ].map((item, index) => (
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

      {/* Safety Guarantees */}
      <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-8">Safety Guarantees</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { icon: <Shield />, title: "Licenses", description: "SEC, FCA, CySEC" },
              { icon: <Shield />, title: "Insurance", description: "Deposits up to $250,000" },
              { icon: <Shield />, title: "Encryption", description: "AES-256 military grade" },
              { icon: <CheckCircle />, title: "Audit", description: "PwC annually" }
            ].map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="font-semibold mb-2">{guarantee.title}</h3>
                <p className="text-sm opacity-90">{guarantee.description}</p>
              </div>
            ))}
          </div>
          
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">Start Investing Now</a>
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