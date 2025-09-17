'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { homeTexts } from "@/data/texts";

export const Header = ({ locale }: { locale: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: homeTexts?.header?.menu?.about, path: "/about" },
    { label: homeTexts?.header?.menu?.reviews, path: "/reviews" },
    { label: homeTexts?.header?.menu?.contact, path: "/contact" },
    { label: homeTexts?.header?.menu?.privacy, path: "/privacy" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass border-b backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          {homeTexts.header.logo}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const fullPath = `/${locale}${item.path}`;
            return (
              <Link
                key={item.path}
                href={fullPath}
                className={`transition-smooth hover:text-primary ${
                  pathname === fullPath ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="hero" size="lg" asChild>
            <Link href={`/${locale}/contact`}>{homeTexts.header.cta}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full glass border-b md:hidden">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {menuItems.map((item) => {
                const fullPath = `/${locale}${item.path}`;
                return (
                  <Link
                    key={item.path}
                    href={fullPath}
                    className={`transition-smooth hover:text-primary ${
                      pathname === fullPath ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button variant="hero" size="lg" asChild className="w-full">
                <Link href={`/${locale}/contact`} onClick={() => setIsMenuOpen(false)}>
                  {homeTexts.header.cta}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};