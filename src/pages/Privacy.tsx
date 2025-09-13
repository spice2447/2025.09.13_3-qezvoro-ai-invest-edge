import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, FileText, Users, Lock, Globe, Mail } from "lucide-react";
import { privacyTexts } from "@/data/texts";

export default function Privacy() {
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

      {/* Detailed Policy Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Detailed Privacy Policy</h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              
              {/* Information Collection */}
              <AccordionItem value="collection" className="glass border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  1. Information We Collect
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Personal Identification Data:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Basic information (name, date of birth, citizenship)</li>
                      <li>Contact details (address, phone, email)</li>
                      <li>Financial profile (income, capital sources, investment goals)</li>
                      <li>Verification documents (passport, ID, bank statements)</li>
                      <li>Biometric data for KYC verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Platform Usage Data:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Transaction history and trading patterns</li>
                      <li>Technical data (IP address, browser, device information)</li>
                      <li>Behavioral analytics (navigation, sessions, preferences)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Data Usage */}
              <AccordionItem value="usage" className="glass border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  2. How We Use Your Data
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Investment Services:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Account creation and management</li>
                      <li>Trading execution and portfolio management</li>
                      <li>Personalized AI reports and recommendations</li>
                      <li>Processing deposits and withdrawals</li>
                      <li>Customer support and assistance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Regulatory Compliance:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Know Your Customer (KYC) and Anti-Money Laundering (AML)</li>
                      <li>Regulatory reporting to financial authorities</li>
                      <li>Fraud prevention and risk assessment</li>
                      <li>Tax reporting obligations</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Data Security */}
              <AccordionItem value="security" className="glass border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  3. Data Security & Protection
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technical Measures:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>AES-256 encryption for data at rest</li>
                      <li>TLS 1.3 encryption for data in transit</li>
                      <li>Multi-factor authentication (MFA)</li>
                      <li>24/7 threat monitoring and intrusion detection</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Encrypted backups with geographic redundancy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Organizational Measures:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Employee security training and background checks</li>
                      <li>Access controls and data segregation</li>
                      <li>Regular PwC security audits</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* User Rights */}
              <AccordionItem value="rights" className="glass border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  4. Your Rights (GDPR)
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Under GDPR, you have the following rights regarding your personal data:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Right of Access:</strong> Request information about the personal data we hold about you</li>
                    <li><strong>Right of Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Right of Erasure:</strong> Request deletion of your personal data under certain circumstances</li>
                    <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing in specific situations</li>
                    <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                    <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at <strong>privacy@qezvoro.com</strong>. We will respond within 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Data Retention */}
              <AccordionItem value="retention" className="glass border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  5. Data Retention Periods
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Account Data:</strong> Duration of contract + 7 years for regulatory compliance</li>
                    <li><strong>KYC Documents:</strong> 7 years after account closure</li>
                    <li><strong>Transaction Records:</strong> 7 years for financial regulations</li>
                    <li><strong>Marketing Data:</strong> Until consent withdrawal or 3 years of inactivity</li>
                    <li><strong>Call Recordings:</strong> 5 years for quality assurance</li>
                    <li><strong>Minors' Data:</strong> Immediately deleted upon detection</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* International Transfers */}
              <AccordionItem value="transfers" className="glass border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  6. International Data Transfers
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    We may transfer your data outside the European Economic Area (EEA) for processing and storage. 
                    We ensure adequate protection through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>EU adequacy decisions for approved countries</li>
                    <li>Standard Contractual Clauses (SCCs) with service providers</li>
                    <li>Binding Corporate Rules (BCR) within our group</li>
                    <li>Certification schemes and codes of conduct</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Cookies */}
              <AccordionItem value="cookies" className="glass border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  7. Cookies & Similar Technologies
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-4">
                    <p>We use cookies and similar technologies for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Necessary Cookies:</strong> Essential for website functionality and security</li>
                      <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                      <li><strong>Analytical Cookies:</strong> Help us understand website usage and performance</li>
                      <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements and track campaigns</li>
                    </ul>
                    <p>
                      You can manage your cookie preferences through your browser settings or our cookie consent banner.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Information</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Globe className="w-6 h-6 text-primary mr-3" />
                      Data Controller
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Company:</strong> {privacyTexts.contact.controller}</p>
                      <p><strong>Address:</strong> {privacyTexts.contact.address}</p>
                      <p><strong>Registration:</strong> Company No. 12345678</p>
                      <p><strong>FCA License:</strong> FRN 987654</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Mail className="w-6 h-6 text-primary mr-3" />
                      Privacy Contacts
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Data Protection Officer:</strong></p>
                      <p>Email: {privacyTexts.contact.dpo}</p>
                      <p>Phone: +44 20 7946 0958</p>
                      <p><strong>Privacy Requests:</strong></p>
                      <p>Email: {privacyTexts.contact.privacy}</p>
                      <p>Phone: +7 (800) 555-00-77</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold mb-4">Complaint Authority</h4>
                  <p className="text-muted-foreground">
                    If you believe we have not handled your personal data properly, you can file a complaint with:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground ml-4">
                    <li><strong>UK:</strong> Information Commissioner's Office (ICO)</li>
                    <li><strong>EU:</strong> Your national Data Protection Authority</li>
                    <li><strong>California:</strong> California Attorney General's Office</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-8">Privacy & Trust Commitment</h2>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Shield />, text: "GDPR & CCPA Compliant" },
              { icon: <FileText />, text: "Independent Audits" },
              { icon: <Lock />, text: "Bank-Grade Security" },
              { icon: <Users />, text: "Transparent Policies" },
              { icon: <Globe />, text: "Global Standards" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-lg opacity-90 max-w-2xl mx-auto">
            "We are committed to maintaining the highest standards of data protection and privacy. 
            Your trust is our most valuable asset."
          </p>
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