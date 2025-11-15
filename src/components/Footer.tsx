"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Our Story", href: "#" },
    { label: "Careers", href: "#" },
  ];

  const supportLinks = [
    { label: "FAQ", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="w-full bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo and tagline section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rotate-45"></div>
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Novari
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Luxury timepieces crafted with precision and passion.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-slate-900 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-slate-900 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-600 hover:text-slate-900 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-200 py-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Novari Watches. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
