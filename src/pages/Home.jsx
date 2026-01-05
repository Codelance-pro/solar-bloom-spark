import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, Phone, Mail, MapPin, Award, Shield, Clock, ChevronLeft, ChevronRight, TrendingUp, Leaf, DollarSign, CheckCircle2, Star, Calculator, Battery, Home as HomeIcon, Users, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-solar.jpg";
import logoImage from "@/assets/logohome.png";
import solar_landing_match_logo from "@/assets/solar_landing_match_logo.png";
import solar1 from "@/assets/solar1.jpg";
import solar2 from "@/assets/solar2.jpg";
import solar3 from "@/assets/solar3.jpg";
import solar4 from "@/assets/solar4.jpg";
import solar5 from "@/assets/solar5.jpg";
import solar6 from "@/assets/solar6.JPG";
import solar7 from "@/assets/solar7.JPG";
import solar8 from "@/assets/solar8.JPG";
import solar9 from "@/assets/solar9.JPG";



const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Solar Calculator States
  const [location, setLocation] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("");
  const [consumerType, setConsumerType] = useState("residential");
  const [roofArea, setRoofArea] = useState("");
  const [results, setResults] = useState(null);

  const bannerSlides = [
    {
      title: "25% Off Solar Installations",
      subtitle: "Limited Time Offer - Ends Dec 31st",
      icon: Zap,
      gradient: "from-yellow-500 via-yellow-400 to-amber-400"
    },
    {
      title: "Free Energy Audit Worth $500",
      subtitle: "Get Your Custom Solar Assessment Today",
      icon: Sun,
      gradient: "from-amber-500 via-yellow-400 to-yellow-300"
    },
    {
      title: "0% Financing Available",
      subtitle: "Make Solar Affordable with Flexible Payment Plans",
      icon: Award,
      gradient: "from-yellow-600 via-amber-500 to-yellow-400"
    }
  ];

  const services = [
     {
      name: "Utility Scale EPC",
      icon: "⚡",
      link: "#services",
      desc: "Turnkey solar energy system provider",
      color: "from-yellow-500 to-amber-600"
    },
    {
      name: "Utility Scale BOS, I & C",
      icon: "🔧",
      link: "#services",
      desc: "Solar project contracting",
      color: "from-amber-500 to-yellow-600"
    },
    {
      name: "MW Scale C & I",
      icon: "🏢",
      link: "#services",
      desc: "Rooftop solar Turnkey service provider",
      color: "from-yellow-400 to-amber-500"
    }
  ];

  const highlights = [
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      desc: "Proven track record in large-scale solar projects",
      colorClass: "from-yellow-500 to-yellow-600",
      bgClass: "bg-black/40"
    },
    {
      icon: Users,
      title: "Skilled Team",
      desc: "Skilled technical and project management team",
      colorClass: "from-amber-500 to-amber-600",
      bgClass: "bg-black/40"
    },
    {
      icon: Globe,
      title: "Strong Network",
      desc: "Strong vendor and partner network",
      colorClass: "from-yellow-600 to-amber-600",
      bgClass: "bg-black/40"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      desc: "Focus on timely delivery and customer satisfaction",
      colorClass: "from-yellow-500 to-amber-500",
      bgClass: "bg-black/40"
    }
  ];

  const benefits = [
    { icon: DollarSign, text: "Save up to 70% on energy bills" },
    { icon: TrendingUp, text: "Increase property value by 4%" },
    { icon: Leaf, text: "Reduce carbon footprint by 80%" },
    { icon: Shield, text: "Protected from rising energy costs" }
  ];

  const contacts = [
    { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567" },
    { icon: Mail, title: "Email Us", info: "info@solarpower.com" },
    { icon: MapPin, title: "Visit Us", info: "123 Solar St, Green City" }
  ];

  const quoteFeatures = [
    "Free on-site energy assessment",
    "Custom system design",
    "Transparent pricing",
    "Flexible financing options"
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bannerSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

  // Solar Calculator Function
  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill);
    const area = parseFloat(roofArea);

    if (isNaN(bill) || isNaN(area)) return;

    // Calculation based on Indian solar standards
    const systemSize = Math.min((bill * 12) / 1200, area / 100); // kW
    const monthlyGeneration = systemSize * 120; // Units per month
    const monthlySavings = monthlyGeneration * 7; // ₹7 per unit average
    const annualSavings = monthlySavings * 12;
    const systemCost = systemSize * 50000; // ₹50,000 per kW
    const paybackPeriod = systemCost / annualSavings;
    const co2Reduction = systemSize * 1.2;
    const subsidy = Math.min(systemSize * 18000, 78000); // Govt subsidy

    setResults({
      systemSize: Math.round(systemSize * 10) / 10,
      monthlyGeneration: Math.round(monthlyGeneration),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      systemCost: Math.round(systemCost),
      netCost: Math.round(systemCost - subsidy),
      subsidy: Math.round(subsidy),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Reduction: Math.round(co2Reduction * 10) / 10,
      lifetimeSavings: Math.round(annualSavings * 25)
    });
  };

  const SlideIcon = bannerSlides[currentSlide].icon;

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.3); }
          50% { box-shadow: 0 0 40px rgba(234, 179, 8, 0.6); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-rotate { animation: rotate-360 20s linear infinite; }
        .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-10px) scale(1.02);
        }
        
        .parallax {
          transform: translateY(${scrollY * 0.5}px);
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-300/30 to-yellow-500/20"></div>
          
          
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(253, 224, 71, 0.2) 0%, transparent 50%)`
          }}></div>
        </div> */}

        <div className="absolute inset-0 z-0">
          <img
            src={solar6}
            alt="Solar background"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-yellow-900/40"></div> */}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left Content */}
              <div className={`space-y-8 ${isVisible ? 'opacity-100' : 'opacity-0'} mb-20`}>
                {/* Subtitle */}
                {/* <div className="inline-flex items-center space-x-2 bg-yellow-100 border-2 border-yellow-400 px-4 py-2 rounded-full shadow-md animate-slide-in-left">
                  <Zap className="h-5 w-5 text-yellow-600 animate-pulse" />
                  <span className="text-yellow-800 font-semibold tracking-wide text-sm">
                    #1 Clean Energy Provider in Your Area
                  </span>
                </div> */}

                {/* <img src={logoImage} alt="Solar background" className="w-80 h-40 mt-10" /> */}

                   <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white animate-slide-in-left delay-100">
                  Powering a Greener Tomorrow with{" "}
                  <span className="bg-yellow-400 bg-clip-text text-transparent">
                    Smart Solar Solutions
                  </span>
                </h1>      

                {/* Main Heading */}
                {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white animate-slide-in-left delay-100">
                  Power Your Future with{" "}
                  <span className="bg-yellow-400 bg-clip-text text-transparent">
                    Solar Energy
                  </span>
                </h1> */}

                {/* Description */}
                {/* <p className="text-lg md:text-xl text-black leading-relaxed animate-slide-in-left delay-200">
                  Transform your home or business with cutting-edge solar technology. Save money, reduce your carbon footprint, and invest in a sustainable future.
                </p> */}

                {/* Benefits List */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {benefits.map((benefit, index) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 text-white/90 animate-bounce-in hover-lift`}
                        style={{ animationDelay: `${0.3 + index * 0.1}s`, opacity: 0 }}
                      >
                        <div className="p-2 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-lg shadow-sm">
                          <BenefitIcon className="h-5 w-5 text-yellow-700" />
                        </div>
                        <span className="text-sm font-medium">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div> */}

                {/* CTA Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in-up delay-500">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 shimmer-effect"></span>
                    <span className="relative">Calculate Your Savings</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5 animate-pulse" />
                    Book Free Consultation
                  </Button>
                </div> */}
              </div>

              {/* Right Content - Floating Sun Icon */}
              <div className="hidden lg:flex justify-end items-center">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
                  <Sun className="h-64 w-64 text-yellow-500 animate-rotate opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sun className="h-48 w-48 text-yellow-600 drop-shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Banner Slider */}
      <section className="py-8 overflow-hidden bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className={`bg-gradient-to-r ${bannerSlides[currentSlide].gradient} transition-all duration-1000`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-3 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <div className="flex-1 text-center text-white py-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                  <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl shadow-lg animate-bounce-in">
                    <SlideIcon className="h-10 w-10" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-1 animate-slide-in-right">
                      {bannerSlides[currentSlide].title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/95 animate-slide-in-right delay-100">
                      {bannerSlides[currentSlide].subtitle}
                    </p>
                  </div>
                  <Button className="bg-white text-yellow-700 hover:bg-yellow-50 font-semibold mt-4 sm:mt-0 shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                    Claim Offer
                  </Button>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="p-3 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-10 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-amber-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Solar Power?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Experience the future of energy with our premium solar solutions
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => {
                const HighlightIcon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-200/50 transition-all duration-300 hover-lift animate-bounce-in"
                    style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
                  >
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${highlight.colorClass} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <HighlightIcon className="h-8 w-8 text-white group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-yellow-700 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.desc}
                      </p>
                      <div className="mt-6 flex items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-yellow-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Premium Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Comprehensive solar solutions tailored to your needs
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="group relative bg-white p-8 rounded-2xl border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-200/50 transition-all duration-300 hover-lift animate-bounce-in"
                  style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
                >
                  <div className="relative z-10 text-center">
                    <div className="text-5xl mb-6 inline-block group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <div className="flex items-center justify-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center animate-fade-in-up">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="absolute inset-0 shimmer-effect"></span>
                <span className="relative">View All Services</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 relative overflow-hidden">
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-white/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-white/25 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Looking for a reliable Solar EPC partner?
              </h2>
              <p className="text-lg md:text-xl text-white/95">
                Delivering quality solar projects with speed, safety, and excellence.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {contacts.map((contact, index) => {
                  const ContactIcon = contact.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-gray-900 text-center border-2 border-yellow-300 hover:border-white hover:shadow-xl transition-all duration-300 hover-lift animate-bounce-in"
                      style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-2xl mb-6 group-hover:from-yellow-300 group-hover:to-amber-300 transition-all shadow-md group-hover:scale-110 group-hover:rotate-6 duration-300">
                        <ContactIcon className="h-8 w-8 text-yellow-700 group-hover:animate-pulse" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{contact.title}</h3>
                      <p className="text-gray-700">{contact.info}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 md:p-12 border-2 border-yellow-300 shadow-2xl animate-fade-in-up hover:scale-105 transition-transform duration-500">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
                    <div className="space-y-4">
                      {quoteFeatures.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-3 text-gray-800 animate-slide-in-left"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <CheckCircle2 className="h-6 w-6 text-yellow-600 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white text-lg px-8 py-6 font-bold shadow-lg hover:shadow-yellow-600/50 transition-all duration-300 w-full hover:scale-105 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 shimmer-effect"></span>
                      <span className="relative">Request Free Quote</span>
                      <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-gray-600 text-sm mt-4 text-center animate-pulse">
                      No obligation • 100% Free • Get response within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;  