import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, FileText, Users, Lock, Globe, Mail } from "lucide-react";
import { privacyTexts } from "@/data/texts";
import { localeCodes } from "@/i18n/locales";

export async function generateStaticParams() {
	return localeCodes.map((locale) => ({ locale }));
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {privacyTexts.title}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Last updated: {privacyTexts.lastUpdated}
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal data in compliance with GDPR, CCPA, and international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Privacy Policy Overview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {privacyTexts.sections.map((section, index) => (
              <Card key={index} className="glass border-primary/20 hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <FileText className="w-8 h-8 text-white" />}
                    {index === 1 && <Users className="w-8 h-8 text-white" />}
                    {index === 2 && <Lock className="w-8 h-8 text-white" />}
                    {index === 3 && <Shield className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
