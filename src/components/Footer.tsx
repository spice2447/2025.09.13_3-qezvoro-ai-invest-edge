'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { footerTexts } from "@/data/texts";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About & Social */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{footerTexts.about.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{footerTexts.about.description}</p>
            <div className="flex space-x-4">
              {footerTexts.socials.map((social: { name: string; url: string }, index: number) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.name === "Facebook" && <Facebook className="h-4 w-4" />}
                    {social.name === "Twitter" && <Twitter className="h-4 w-4" />}
                    {social.name === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                    {social.name === "Instagram" && <Instagram className="h-4 w-4" />}
                    {social.name === "YouTube" && <Youtube className="h-4 w-4" />}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerTexts.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footerTexts.quickLinks.links.map((link: { name: string; url: string }, index: number) => (
                <li key={index}>
                  <Link href={link.url} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerTexts.legal.title}</h3>
            <ul className="space-y-2">
              {footerTexts.legal.links.map((link: { name: string; url: string }, index: number) => (
                <li key={index}>
                  <Link href={link.url} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerTexts.newsletter.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{footerTexts.newsletter.description}</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none focus:shadow-glow" />
              <Button type="submit" className="rounded-l-none">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>{footerTexts.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
