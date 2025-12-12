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
    { icon: Facebook, href: "#", name: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", name: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", name: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", name: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Youtube, href: "#", name: "YouTube", color: "hover:bg-red-600" }
  ];

  const certifications = [
    { name: "NABCEP Certified", icon: "🏆" },
    { name: "BBB Accredited", icon: "⭐" },
    { name: "EPA Partner", icon: "🌿" },
    { name: "ISO 9001", icon: "✓" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-700/50 relative z-10">
        <div className="container mx-auto px-4 ">
          {/* <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Stay Updated!
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest solar energy tips, offers, and industry news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
              <Button 
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                Subscribe
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-3 rounded-2xl shadow-lg animate-pulse">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">SolarPower</h2>
                <p className="text-sm text-gray-400">Clean Energy Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of sustainable solar energy solutions. We're committed to helping homes and businesses transition to clean, renewable energy.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-semibold">info@solarpower.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="font-semibold">123 Solar Street, Green City, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <p className="font-semibold">Mon - Fri: 8AM - 6PM</p>
                  <p className="text-sm text-gray-400">Sat: 9AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-b border-gray-700/50 py-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-2 bg-gray-800/50 px-6 py-3 rounded-xl hover:bg-gray-800 transition-all hover:scale-105"
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="font-semibold text-sm">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Media */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 mr-2">Follow Us:</span>
            {socialLinks.map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className={`bg-gray-800 p-3 rounded-xl hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  <SocialIcon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SolarPower. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2">
              <a href="#privacy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-600">•</span>
              <a href="#cookies" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"></div>
    </footer>
  );
};

export default Footer;