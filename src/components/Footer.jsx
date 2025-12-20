import { Button } from "@/components/ui/button";
import {
  Sun,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Clock,
  Send
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed:", email);
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Residential Solar", href: "#services" },
    { name: "Commercial Solar", href: "#services" },
    { name: "Solar Maintenance", href: "#services" },
    { name: "Battery Storage", href: "#services" },
    { name: "Energy Audit", href: "#services" }
  ];

  const resources = [
    { name: "Solar Calculator", href: "#calculator" },
    { name: "FAQs", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Case Studies", href: "#cases" },
    { name: "Financing Options", href: "#financing" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  const certifications = [
    { name: "NABCEP Certified", icon: "🏆" },
    { name: "BBB Accredited", icon: "⭐" },
    { name: "EPA Partner", icon: "🌿" },
    { name: "ISO 9001", icon: "✓" }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-cyan-700/30 relative z-10">
        <div className="container mx-auto px-4 ">
          {/* Newsletter content commented out */}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-3 rounded-2xl shadow-lg">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">SolarPower</h2>
                <p className="text-sm text-cyan-300">Clean Energy Solutions</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Leading provider of sustainable solar energy solutions. We're committed to helping homes and businesses transition to clean, renewable energy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="bg-cyan-800/50 p-2 rounded-lg group-hover:bg-cyan-500 transition-colors">
                  <Phone className="h-5 w-5 text-cyan-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Call Us</p>
                  <p className="font-semibold text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-cyan-800/50 p-2 rounded-lg group-hover:bg-cyan-500 transition-colors">
                  <Mail className="h-5 w-5 text-cyan-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email Us</p>
                  <p className="font-semibold text-white">info@solarpower.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-cyan-800/50 p-2 rounded-lg group-hover:bg-cyan-500 transition-colors">
                  <MapPin className="h-5 w-5 text-cyan-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Visit Us</p>
                  <p className="font-semibold text-white">123 Solar Street, Green City, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-cyan-800/50 p-2 rounded-lg group-hover:bg-cyan-500 transition-colors">
                  <Clock className="h-5 w-5 text-cyan-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Business Hours</p>
                  <p className="font-semibold text-white">Mon - Fri: 8AM - 6PM</p>
                  <p className="text-sm text-gray-300">Sat: 9AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative text-white">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-cyan-300 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative text-white">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-200 hover:text-cyan-300 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative text-white">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-200 hover:text-cyan-300 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-b border-cyan-700/30 py-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-cyan-800/40 px-6 py-3 rounded-xl hover:bg-cyan-600 hover:scale-105 transition-all group"
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="font-semibold text-sm text-gray-100 group-hover:text-white">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Media */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-200 mr-2">Follow Us:</span>
            {socialLinks.map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="bg-cyan-800/50 p-3 rounded-xl hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group"
                >
                  <SocialIcon className="h-5 w-5 text-cyan-300 group-hover:text-white" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-200 text-sm">
              © {new Date().getFullYear()} SolarPower. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2">
              <a href="#privacy" className="text-gray-300 hover:text-cyan-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-500">•</span>
              <a href="#terms" className="text-gray-300 hover:text-cyan-300 text-sm transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-500">•</span>
              <a href="#cookies" className="text-gray-300 hover:text-cyan-300 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500"></div>
    </footer>
  );
};

export default Footer;